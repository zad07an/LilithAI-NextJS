"use client";

import cn from "@/utils/tailwindMerge";
import React, { FC } from "react";

interface Props {
  className?: string;
}

const Overlay: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 backdrop-blur-sm z-40",
        className || ""
      )}
    />
  );
};

export default Overlay;
