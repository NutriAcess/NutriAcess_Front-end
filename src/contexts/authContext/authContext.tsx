import { createContext, useState } from "react";
import {
  IAuthContext,
  IAuthContextProvider,
  TEsp,
  TUser,
} from "./authContext.types";
import {
  getEsp,
  getUser,
  // signIn,
  // signUp,
} from "../../services/authService/authService";

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

  function signInEsp(espParam: TEsp) {
    // signIn(espParam);
    const espResponse = getEsp();
    setEsp(espResponse);
    setIsLogged(true);
  }

  return (
    <AuthContext.Provider
      value={{ user, isLogged, signUpUser, useresp, signInEsp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
