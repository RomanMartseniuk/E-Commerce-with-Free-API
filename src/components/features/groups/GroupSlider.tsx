import { cn } from "@/lib/utils"
import type React from "react"

export const GroupSlider = ({className='',  children}: {className?: string, children: React.ReactNode}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-nowrap items-start justify-start gap-10 overflow-x-scroll overflow-y-hidden py-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
