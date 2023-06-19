import { useContext } from "react";
import { FormContext } from "../contexts/formContext/formContext";

export function useForm() {
  return useContext(FormContext);
}
