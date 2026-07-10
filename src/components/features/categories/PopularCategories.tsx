import { useCategories } from "@/hooks/useCategories";
import { CategoriesGroup } from "./CategoriesGroup";
import { Loader } from "@/components/common/Loader";

export const PopularCategories = () => {
  const { data: popularCategories, isLoading } = useCategories();
  return (
    <>
      {isLoading ? (
        <Loader className="h-80"/>
      ) : popularCategories ? (
        <CategoriesGroup
          title="Popular Categories"
          categories={popularCategories.slice(0,4)}
        />
      ) : (
        <></>
      )}
    </>
  );
};
