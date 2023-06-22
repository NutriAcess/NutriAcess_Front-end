import { createContext, useState } from "react";
import {
  getEsp,
  getUser,
} from "../../services/authService/authService";
import {
  IAuthContext,
  IAuthContextProvider,
  TEsp,
  TUser,
} from "./authContext.types";

export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider({ children }: IAuthContextProvider) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({} as TUser);
  const [useresp, setEsp] = useState({} as TEsp);

  function signUpUser(userParam: TUser) {
    // signUp(userParam);
    const userResponse = getUser();
    setUser(userResponse);
    setIsLogged(true);
  }

  function signUpEsp(espParam: TEsp) {
    // signIn(espParam);
    const espResponse = getEsp();
    setEsp(espResponse);
    setIsLogged(true);
  }

  return (
    <AuthContext.Provider
      value={{ user, isLogged, signUpUser, useresp, signUpEsp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
