import { createContext, useMemo, useState } from "react";
import avatarAbacaxi from "../../assets/avatarAbacaxi.png";
import avatarLaranja from "../../assets/avatarLaranja.png";
import { default as avatarMaca, default as avatarUva } from "../../assets/avatarMaca.png";
import {
  AvatarsEnum,
  TForm,
} from "../../services/authService/authService.types";
import { IFormContext, IFormContextProvider } from "./formContext.types";

export const dataAvatar = [
  {
  title : "Avatar Abacaxi",
  imagem : { alt: "", url: avatarAbacaxi },
},
{
  title : "Avatar Laranja",
  imagem : { alt: "", url: avatarLaranja },
},
{
  title : "Avatar Maca",
  imagem : { alt: "", url: avatarMaca },
},
{
  title : "Avatar Uva",
  imagem : { alt: "", url: avatarUva },
}
]

export const FormContext = createContext({} as IFormContext);

export function FormContextProvider({ children }: IFormContextProvider) {
  const initialFormValues = {
    id_cliente: "123",
    foto: AvatarsEnum.avatarUva,
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
