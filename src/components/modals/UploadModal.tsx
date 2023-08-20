"use client";

import { useAppContext } from "@/context/AppProvider";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import React, { FC, useRef } from "react";

interface Props {
  isOpen: boolean;
}

const UploadModal: FC<Props> = ({ isOpen }) => {
  const { handleCloseUploadModal } = useAppContext();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, handleCloseUploadModal);

  return (
    <div
      ref={modalRef}
      className={` ${
        isOpen ? "scale-100" : "scale-0"
      } w-1/2 h-fit sm:hidden flex items-center justify-center flex-col gap-5 fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-1 p-10 rounded-2xl transition-all duration-200 z-50`}
    >
      <button
        className=" bg-dark-2 rounded-full absolute top-3 right-3"
        onClick={handleCloseUploadModal}
      >
        <Image src={"/assets/icons/delete-icon.svg"} alt="upload" width={24} height={24} />
      </button>
      <header>
        <h2 className=" text-lg font-semibold uppercase">Upload</h2>
      </header>
      <div className=" cursor-pointer">
        <Image src={"/assets/icons/big-plus-icon.svg"} alt="upload" width={64} height={64} />
      </div>
      <p className=" text-dark-1 text-sm">Upload PDF JPG PNG SVG formats</p>
    </div>
  );
};

export default UploadModal;
