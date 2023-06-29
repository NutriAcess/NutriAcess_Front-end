import axios from "axios";

export const api = axios.create({
  // baseURL: "http://api.nutriacess.com.br",
  baseURL: "http://localhost:3003",
});
