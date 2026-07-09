import { Link } from "react-router";

import type { Product } from "@/types/Product";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { IconHeart, IconShoppingBag } from "@tabler/icons-react";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group flex flex-col rounded-2xl border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-muted">
        {!product.images[0] || product.images[0].length < 1 ? (
          <Skeleton className="size-40 rounded-xl" />
        ) : (
          <img
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            src={product.images[0]}
            alt={product.title}
          />
        )}
      </div>

      <h2 className="mt-4 line-clamp-2 min-h-12 text-sm font-medium">
        {product.title}
      </h2>

      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-xl font-bold text-primary">${product.price}</span>

        <div className="flex gap-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:bg-pink-100 hover:text-pink-600"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <IconHeart size={18} />
          </Button>

          <Button
            size="icon"
            className="rounded-full"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <IconShoppingBag size={18} />
          </Button>
        </div>
      </div>
    </Link>
  );
};
