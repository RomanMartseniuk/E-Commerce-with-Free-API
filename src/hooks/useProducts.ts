import { useQuery } from "@tanstack/react-query";

import type { ProductsReqParams } from "@/types/ProductsReqParams";
import { client } from "@/api/client";
import type { Product } from "@/types/Product";

export const useProducts = (filters: ProductsReqParams   ) => {
   const products = client.products;
   return useQuery({
      queryKey: ["products", filters],

      queryFn: () => products.getProducts(filters),

      placeholderData: (previousData?: Product[]) => previousData,

      staleTime: 5 * 60 * 1000,
   })
}