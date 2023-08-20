import React, { RefObject, useEffect } from "react";

type ElementType<T> = RefObject<T>;
type OnCloseType = () => void;

const useClickOutside = <T extends HTMLElement>(element: ElementType<T>, onClose: OnCloseType) => {
  const handleClose = (e: MouseEvent) => {
    if (element?.current && !element.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClose);
    return () => document.removeEventListener("mousedown", handleClose);
  }, [handleClose]);
};

export default useClickOutside;
