import { useQuery } from "@tanstack/react-query";

import { client } from "@/api/client";
import type { Category } from "@/types/Category";

export const useCategories = () => {
   const categories = client.categories;
   return useQuery({
      queryKey: ["categories"],

      queryFn: () => categories.getCategories(),

      placeholderData: (previousData?: Category[]) => previousData,

      staleTime: 5 * 60 * 1000,
   })
}