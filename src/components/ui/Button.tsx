"use client";

import cn from "@/utils/tailwindMerge";
import React, { ReactNode, ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        " px-8 py-2 font-semibold bg-yellow-1 border border-yellow-1 text-dark-1 rounded-md",
        className || ""
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
