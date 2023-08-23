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
        " px-8 py-2 font-semibold hover:bg-yellow-2 bg-yellow-1 border border-yellow-1 hover:border-yellow-2 text-dark-1 hover:text-light-1 rounded-md transition-all duration-200",
        className || ""
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
