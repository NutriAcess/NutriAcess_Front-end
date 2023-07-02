import { api } from "../../config/axios/axios";
import { TEsp, TUser } from "../../contexts/authContext/authContext.types";
import {
  ISignInEps,
  ISignInUser,
  TSignInEspResponse,
  TSignInUserResponse,
  TSignUpEspResponse,
  TSignUpUserResponse
} from "./authService.types";

export async function signUpUser(user: TUser): Promise<TSignUpUserResponse> {
  const response = await api.post("/cliente/cadastrar", user);
  return response.data;
}

export async function signUpEsp(useresp: TEsp): Promise<TSignUpEspResponse> {
  const response = await api.post("/nutricionista/cadastrar", useresp);
  return response.data;
}

export async function signInUser(
  user: ISignInUser,
  loginUser: any
): Promise<TSignInUserResponse> {
  const response = await api.post("/cliente/conectar", user);
  api.defaults.headers.common.Authorization = `${response.data.token}`;
  loginUser(response.data.user.data, response.data.token);
  return response.data.user;
}

export async function signInEsp(
  useresp: ISignInEps,
  loginEsp: any
): Promise<TSignInEspResponse> {
  const response = await api.post("/nutricionista/conectar", useresp);
  api.defaults.headers.common.Authorization = `${response.data.token}`;
  loginEsp(response.data.user.data, response.data.token);

  return response.data;
}

export function getUser() {
  const user = localStorage.getItem("@user") as string;
  return JSON.parse(user);
}

export function getEsp() {
  const esp = localStorage.getItem("@esp") as string;
  return JSON.parse(esp);
}

// export async function confirmPayment(
//   useresp: ISignInEps,
//   loginEsp: any
// ): Promise<TSignInEspResponse> {
//   const response = await api.post("/planos/criar", useresp);
//   api.defaults.headers.common.Authorization = `${response.data.token}`;
//   loginEsp(response.data.user.data, response.data.token);

//   return response.data;
// }