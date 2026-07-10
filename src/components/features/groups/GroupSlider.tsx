import { cn } from "@/lib/utils"
import type React from "react"

export const GroupSlider = ({className='',  children}: {className?: string, children: React.ReactNode}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-wrap items-center justify-center gap-10 py-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
