import { Link } from "react-router";

import type { Category } from "@/types/Category";

import { Skeleton } from "../../ui/skeleton";

export const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      to={`/categories/${category.id}`}
      className="group  relative flex w-full sm:w-70 md:w-87 lg:w-120 xl:w-85 flex-col items-center justify-center hover:text-accent hover:translate-y-0.5 transition-all"
    >
      <div className="relative overflow-hidden w-full xl:w-82 aspect-square rounded-2xl">
        <img src={category.image} alt={category.name} className="object-cover mb-4 group-hover:scale-105 transition-all" />
      </div>
      <h1 className="transition-all hover:underline font-bold uppercase">{category.name}</h1>
    </Link>
  );
};

export const CategoryPlug = () => (<Skeleton className="size-80 aspect-square rounded-xl" />)
