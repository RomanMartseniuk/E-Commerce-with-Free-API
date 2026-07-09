import { Link } from "react-router";

import type { Category } from "@/types/Category";

import { Skeleton } from "../../ui/skeleton";

export const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      to={`/categories/${category.id}`}
      className="flex flex-col items-center justify-center hover:text-accent hover:translate-y-0.5 transition-all"
    >
      <Skeleton className="size-40 aspect-square rounded-full bg-red-200" />
      <h1 className="transition-all hover:underline">{category.name}</h1>
    </Link>
  );
};
