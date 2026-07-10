import { useProducts } from "@/hooks/useProducts";
import { ProductsGroup } from "./ProductsGroup";
import { Loader } from "@/components/common/Loader";

const PopularProducts = () => {
  const {
    data: popularProducts,
    isLoading,
  } = useProducts({ offset: 0, limit: 4 });

  return (
    <>
      {isLoading ? (
        <Loader className="h-80"/>
      ) : popularProducts ? (
        <ProductsGroup title="Popular Products" products={popularProducts} />
      ) : (
        <></>
      )}
    </>
  );
};

export default PopularProducts;
