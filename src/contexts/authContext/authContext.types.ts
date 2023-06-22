import { ReactNode } from "react";

export type TUser = {
  email: string;
  senha: string;
  nome_completo: string;
  nome_social: string;
};

export type TEsp = {
  crn: string;
  email: string;
  senha: string;
  nome_completo: string;
  nome_social: string;
};

export interface IAuthContext {
  user: TUser;
  useresp: TEsp;
  isLogged: boolean;
  signUpEsp: (useresp: TEsp) => void;
  signUpUser: (user: TUser) => void;
}

export interface IAuthContextProvider {
  children: ReactNode;
}
