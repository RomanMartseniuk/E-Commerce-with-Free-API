import { api } from "../api"

export const getCategories = async () => {
   return api('categories/');
}

export const getCategory = async (id: number) => {
   return api(`categories/${id}`);
}