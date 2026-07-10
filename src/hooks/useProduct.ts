import { useQuery } from "@tanstack/react-query";

import { client } from "@/api/client";
import type { Product } from "@/types/Product";

export const useProduct = (id: number) => {
   const products = client.products;
   return useQuery({
      queryKey: ["product", id],

      queryFn: () => products.getProduct(id),

      placeholderData: (previousData?: Product) => previousData,

      staleTime: 5 * 60 * 1000,
   })
}