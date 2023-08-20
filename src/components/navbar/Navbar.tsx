"use client";

import { navbarData } from "@/constants";
import { useAppContext } from "@/context/AppProvider";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const userMenuRef = useRef<HTMLUListElement | null>(null);
  const { isUserMenuOpen, handleOpenUserMenu, handleCloseUserMenu } = useAppContext();

  useClickOutside(userMenuRef, handleCloseUserMenu);

  return (
    <header className=" w-full bg-dark-1 mt-5 md:px-10 px-5">
      <nav className=" w-full py-5 grid md:grid-cols-3 grid-cols-2 border border-light-2 rounded-lg px-10">
        <div>
          <Link href="/">
            <Image src={"/assets/images/logo.svg"} alt="logo" width={120} height={35} />
          </Link>
        </div>
        <ul className=" hidden md:flex items-center justify-center gap-5">
          {navbarData?.map((link, index: number) => (
            <li key={index}>
              <Link
                href={link?.path}
                className={` ${
                  (pathname.includes(link?.path) && link?.path?.length > 1) ||
                  pathname === link?.path
                    ? "text-yellow-1"
                    : "text-light-2"
                } uppercase`}
              >
                {link.route}
              </Link>
            </li>
          ))}
        </ul>
        <ul className=" flex items-center justify-end gap-5">
          <li>
            <Image src={"/assets/icons/theme-icon.svg"} alt="theme" width={24} height={24} />
          </li>
          <li className=" flex items-center gap-3">
            <div>
              <Image src={"/assets/icons/lang-icon.svg"} alt="language" width={24} height={24} />
            </div>
            <span className=" md:block hidden text-light-2 font-semibold">Eng</span>
          </li>
          <li className={` md:block hidden `}>
            <button
              className={`  ${isUserMenuOpen ? "pointer-events-none" : "cursor-pointer"}`}
              onClick={handleOpenUserMenu}
            >
              <Image src={"/assets/icons/user-icon.svg"} alt="theme" width={16} height={16} />
            </button>
            <ul
              ref={userMenuRef}
              className={` ${
                isUserMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } flex items-start flex-col gap-5 absolute right-10 top-28 py-4 pl-4 pr-16 rounded-md bg-dark-2 text-light-1 transition-all duration-200`}
            >
              <li>
                <Link href={"/register"} className=" font-semibold">
                  Sing Up
                </Link>
              </li>
              <li>
                <Link href={"/login"} className=" font-semibold">
                  Sign In
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
