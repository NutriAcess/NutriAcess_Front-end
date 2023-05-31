import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProvider, TUser } from "./authContext.types";
import { getUser, signUp } from "../../services/authService/authService";

export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider({ children }: IAuthContextProvider) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({} as TUser);

  function signUpUser(userParam: TUser) {
    signUp(userParam);
    const userResponse = getUser();
    setUser(userResponse);
    setIsLogged(true);
  }

  return (
    <AuthContext.Provider value={{ user, isLogged, signUpUser }}>
      {children}
    </AuthContext.Provider>
  );
}
