import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-col container mx-2",
        className,
      )}
    >
      {children}
    </div>
  );
};
