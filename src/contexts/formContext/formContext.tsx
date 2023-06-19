import React, { createContext, useMemo, useState } from "react";
import { IFormContext, IFormContextProvider } from "./formContext.types";
import {
  AvatarsEnum,
  TForm,
} from "../../services/authService/authService.types";

export const FormContext = createContext({} as IFormContext);

export function FormContextProvider({ children }: IFormContextProvider) {
  const initialFormValues = {
    id_cliente: "123",
    foto: AvatarsEnum.generic,
    nome: "Marcelo",
  };

  const [form, setForm] = useState<TForm>(initialFormValues as TForm);

  const values = useMemo(
    () => ({
      setForm,
      form,
    }),
    [form]
  );

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
