import { ReactNode } from "react";
import { TForm } from "../../services/authService/authService.types";

export interface IFormContextProvider {
  children: ReactNode;
}

export interface IFormContext {
  setForm: React.Dispatch<React.SetStateAction<TForm>>;
  form: TForm;
}
