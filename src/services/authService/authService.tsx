import { TEsp, TUser } from "../../contexts/authContext/authContext.types";

export function signUp(user: TUser): void {
  localStorage.setItem("@user", JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem("@user") as string;
  return JSON.parse(user);
}

export function signIn(useresp: TEsp): void {
  localStorage.setItem("@esp", JSON.stringify(useresp));
}

export function getEsp() {
  const esp = localStorage.getItem("@esp") as string;
  return JSON.parse(esp);
}