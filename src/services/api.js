import axios from "axios";

export const api = axios.create({ baseURL: "https://ruminar.onrender.com" });

export async function getLivraria() {
  const response = await api.get("/livraria");
  return response.data;
}

export async function postLivraria(data) {
  const response = await api.post("/livraria", data);
  return response.data;
}

export async function deleteLivraria(id) {
  const response = await api.delete(`/livraria/${id}`);
  return response.data;
}

export async function postDieta(data) {
  const response = await api.post("/dieta", data);
  return response.data;
}
