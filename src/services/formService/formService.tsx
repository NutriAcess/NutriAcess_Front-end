import { api } from "../../config/axios/axios";
import { TForm } from "../authService/authService.types";

export async function submitForm(form: TForm): Promise<TForm> {
  const response = await api.post("/formulario/criar", form);
  console.log(response);
  return response.data;
}
