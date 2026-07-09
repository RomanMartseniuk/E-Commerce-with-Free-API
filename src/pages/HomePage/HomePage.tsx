import { Banners } from "./components/Banners"

import { PopularCategories } from "@/components/features/categories/PopularCategories";
import PopularProducts from "@/components/features/products/PopularProducts";

export const HomePage = () => {
  return (
    <>
      <Banners />

      {/* Popular Categories */}
      <PopularCategories />
      {/* Popular Products */}
      <PopularProducts />
    </>
  );
}
