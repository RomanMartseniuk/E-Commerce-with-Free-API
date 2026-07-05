import type { Product } from "@/types/Product";
import { api } from "../api";

interface ProductsParams {
   id?: number,

   title?: string,
   categoryId: number,
   price_min?: number,
   price_max?: number,
   offset?: number,
   limit?: number

}

const request = async (params: URLSearchParams | string) => {
   return api<Product[]>(`proucts/${params.toString()}`)
}

export const getProducts = async (params?: ProductsParams) => { 
   const searchParams = new URLSearchParams();


   if (params?.title) searchParams.append('title', String(params.title));

   if (params?.categoryId) {
      searchParams.append("categoryId", String(params.categoryId));
   }

   if (params?.price_min) {
      searchParams.append("price_min", String(params.price_min));
   }

   if (params?.price_max) {
      searchParams.append("price_max", String(params.price_max));
   }

   if (params?.offset) {
      searchParams.append("offset", String(params.offset));
   }

   if (params?.limit) {
      searchParams.append("limit", String(params.limit));
   }

   return request(searchParams);

}

export const getProduct = async (id: number) => {
   return request(String(id));
};