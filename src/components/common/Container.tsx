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
        "mx-auto  relative flex items-center justify-center flex-col container px-2",
        className,
      )}
    >
      {children}
    </div>
  );
};
