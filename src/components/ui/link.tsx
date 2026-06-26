import { cn } from "@/lib/utils";
import type React from "react";

import {Link as ReactRouterLink} from 'react-router';

export const Link = ({
  className,
  children,
  to,
}: {
  className?: string;
  children: React.ReactNode;
  to: string;
}) => {
  return <ReactRouterLink to={to} className={cn('transition-all hover:text-accent', className)}>{children}</ReactRouterLink>;
};

