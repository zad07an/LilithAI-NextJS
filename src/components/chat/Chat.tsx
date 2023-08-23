"use client";

import React, { useRef } from "react";
import Switcher from "../ui/Switcher";
import Image from "next/image";
import Button from "../ui/Button";
import useClickOutside from "@/hooks/useClickOutside";
import { useAppContext } from "@/context/AppProvider";
import UploadModal from "../modals/UploadModal";

const Chat = () => {
  const {
    isInputMenuOpen,
    handleCloseInputMenu,
    handleOpenInputMenu,
    isUploadModalOpen,
    handleOpenUploadModal
  } = useAppContext();
  const inputMenuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(inputMenuRef, handleCloseInputMenu);

  return (
    <>
      <UploadModal isOpen={isUploadModalOpen} />
      <div className=" h-full flex items-center flex-col gap-5">
        <header className=" w-full flex items-center justify-between flex-wrap gap-5">
          <select
            name=""
            id=""
            className=" cursor-pointer font-semibold w-1/2 py-4 rounded-lg px-5 bg-dark-2 text-light-2 flex grow"
          >
            <optgroup>
              <option value="eng">Eng</option>
            </optgroup>
          </select>
          <div className=" flex items-center justify-center gap-5 flex-wrap">
            <div className=" flex items-center justify-center gap-4 grow">
              <Switcher />
              <p className=" text-light-1">Find Case</p>
            </div>
            <button className=" md:hidden block grow">
              <Image src={"/assets/icons/white-save-icon.svg"} alt="save" width={20} height={20} />
            </button>
            <Button className=" md:block hidden py-2 px-4 grow hover:bg-light-1 hover:border-light-1 hover:text-dark-1">
              <Image src={"/assets/icons/save-icon.svg"} alt="save" width={16} height={16} />
            </Button>
            <Button className=" md:flex hidden items-center gap-2 justify-center font-normal text-sm py-2 px-8 grow hover:bg-light-1 hover:border-light-1 hover:text-dark-1">
              <Image
                src={"/assets/icons/plus-without-circle-icon.svg"}
                alt="save"
                width={16}
                height={16}
              />
              New Question
            </Button>
          </div>
        </header>

        {/* //* CHAT BOARD */}

        <div className=" border border-light-2 rounded-lg w-full h-full"></div>

        {/* //* CHAT BOARD */}

        <div className=" w-full flex items-star flex-col bg-dark-2 rounded-lg">
          <div className=" w-full flex items-center md:justify-start justify-center bg-dark-1 relative">
            <div className=" w-fit text-center text-sm font-semibold rounded-t-2xl bg-yellow-1 text-dark-1 px-8 py-2">
              Prompt Library
            </div>
            <div
              ref={inputMenuRef}
              className={` sm:hidden ${
                isInputMenuOpen ? "flex" : "hidden"
              } items-center justify-center gap-5 absolute right-0 bottom-0 bg-yellow-1 px-4 py-2 rounded-t-2xl z-50`}
            >
              <div className=" cursor-pointer" onClick={handleOpenUploadModal}>
                <Image src={"/assets/icons/dark-file-icon.svg"} alt="icon" width={24} height={24} />
              </div>
              <div className=" cursor-pointer">
                <Image src={"/assets/icons/dark-link-icon.svg"} alt="icon" width={24} height={24} />
              </div>
              <div className=" cursor-pointer">
                <Image
                  src={"/assets/icons/dark-clipboard-icon.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-[2fr_1fr] p-4 rounded-lg z-50">
            <input
              type="text"
              className=" w-full flex-1 bg-transparent outline-none placeholder:text-light-2 text-light-2"
              placeholder="Ask me about Law"
            />
            <div className=" flex items-center justify-end gap-5">
              <div className=" sm:block hidden cursor-pointer">
                <Image src={"/assets/icons/file-icon.svg"} alt="icon" width={24} height={24} />
              </div>
              <div className=" sm:block hidden cursor-pointer">
                <Image src={"/assets/icons/link-icon.svg"} alt="icon" width={24} height={24} />
              </div>
              <div className=" sm:block hidden cursor-pointer">
                <Image src={"/assets/icons/clipboard-icon.svg"} alt="icon" width={24} height={24} />
              </div>
              <div className=" cursor-pointer">
                <Image
                  src={"/assets/icons/microphone-icon.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
              <div className=" sm:block hidden cursor-pointer">
                <Image
                  src={"/assets/icons/right-arrow-icon.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className={` sm:hidden ${
                  isInputMenuOpen ? "pointer-events-none" : "cursor-pointer"
                }`}
                onClick={handleOpenInputMenu}
              >
                <Image
                  src={"/assets/icons/input-menu-icon.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
