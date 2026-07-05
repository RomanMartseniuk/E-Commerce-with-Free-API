import { cn } from "@/lib/utils";
import React from "react";

export const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center",
        className,
      )}
    >
      {children}
    </div>
  );
};
