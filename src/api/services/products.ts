import type { Product } from "@/types/Product";
import { request } from "../api";
import type { ProductsReqParams } from "@/types/ProductsReqParams";

const get = async (params: string) => {
   return request(`products${params}`)
}

export const getProducts = async (params?: ProductsReqParams) => { 
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
   } else {
      searchParams.append("offset", String(0));
   }

   if (params?.limit) {
      searchParams.append("limit", String(params.limit));
   }

   return get(`?${searchParams.toString()}`) as Promise<Product[]>;

}

export const getProduct = async (id: number) => {
   return get(String(`/${id}`)) as Promise<Product>;
};