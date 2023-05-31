import { ReactNode } from "react";

export type TUser = {
  email: string;
  password: string;
  name: string;
  socialName: string;
};

export interface IAuthContext {
  user: TUser;
  isLogged: boolean;
  signUpUser: (user: TUser) => void;
}

export interface IAuthContextProvider {
  children: ReactNode;
}
