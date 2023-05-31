import { TUser } from "../../contexts/authContext/authContext.types";

export function signUp(user: TUser): void {
  localStorage.setItem("@user", JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem("@user") as string;
  return JSON.parse(user);
}
