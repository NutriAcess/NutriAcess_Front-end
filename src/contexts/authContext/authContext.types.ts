import { ReactNode } from "react";

export type TUser = {
  id_cliente?: string | number;
  email: string;
  senha: string;
  nome_completo: string;
  nome_social: string;
  telefone: string;
};

export type TEsp = {
  crn: string;
  email: string;
  senha: string;
  nome_completo: string;
  nome_social: string;
  telefone: string;
  especialidade: string;
};

export type TPayment = {
  plan: string;
  nometitular: string;
  ncartao: number;
  validade: number;
  cods: number;
};

export interface IAuthContext {
  user: TUser;
  profile: any;
  useresp: TEsp;
  token: string;
  isLogged: boolean;
  signUpEsp: (useresp: TEsp) => void;
  signUpUser: (user: TUser) => void;
  loginUser: (user: any, token: string) => void;
  loginEsp: (user: any, token: string) => void;
  logoutUser: Function;
  setPerfil: Function;
}

export interface IAuthContextProvider {
  children: ReactNode;
}
