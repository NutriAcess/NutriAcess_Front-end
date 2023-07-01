import { api } from "../../config/axios/axios";
import { FaleConosco } from "../authService/authService.types";
export async function submitFormFale(formFale: FaleConosco): Promise<FaleConosco> {
  console.log(formFale)

  const response = await api.post("/fale-conosco/criar", formFale);
  return response.data;
}
