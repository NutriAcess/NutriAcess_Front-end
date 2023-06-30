import { api } from "../../config/axios/axios";
import { TForm } from "../authService/authService.types";
export async function submitForm(form: TForm, token: string): Promise<TForm> {
  console.log(form)
  console.log(token)
  const response = await api.post("/formulario/criar", form, {
    headers: { Authorization: token }
  });
  return response.data;
}
