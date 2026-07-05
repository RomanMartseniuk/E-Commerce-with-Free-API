import { Banners } from "./components/Banners"
import { CategoriesGroup } from "@/components/common/CategoriesGroup"
import { ProductsGroup } from "@/components/common/ProductsGroup"

export const HomePage = () => {
  return (
    <>
      <Banners />
      {/* Popular Categories */}
      
      <CategoriesGroup />
      {/* Sales */}
      <ProductsGroup />

      {/* Popular Products */}
    </>
  )
}
