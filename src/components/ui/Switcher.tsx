"use client";

import cn from "@/utils/tailwindMerge";
import React, { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Switcher: FC<Props> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "text-light-1 flex items-center relative h-6 w-12 bg-dark-2 rounded-full",
        className || ""
      )}
      {...props}
    >
      <div className=" w-4 h-4 rounded-full bg-red-500 absolute left-1"></div>
    </button>
  );
};

export default Switcher;
