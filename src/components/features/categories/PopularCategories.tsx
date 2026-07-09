import { CategoriesGroup } from "./CategoriesGroup";

import { popularCategories } from "@/data/popularCategories";

export const PopularCategories = () => {
  return (
    <CategoriesGroup
      title="Popular Categories"
      categories={popularCategories}
    />
  );
};
