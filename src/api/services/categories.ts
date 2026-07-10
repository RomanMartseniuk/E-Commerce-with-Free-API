import type { Category } from "@/types/Category";
import { request } from "../api"

export const getCategories = async () => {
   return request('categories/') as Promise<Category[]>;
}

export const getCategory = async (id: number) => {
   return request(`categories/${id}`) as Promise<Category>;
}