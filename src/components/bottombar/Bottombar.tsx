"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bottombar = () => {
  return (
    <nav className=" sticky bottom-0 md:hidden w-full justify-center items-center py-5 px-10 bg-yellow-1 z-50">
      <ul className=" flex items-center justify-evenly gap-5 relative">
        <li>
          <Link href={"/"}>
            <Image src={"/assets/icons/home-icon.svg"} alt="home" width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href={"/discover"}>
            <Image src={"/assets/icons/discovery-icon.svg"} alt="home" width={24} height={24} />
          </Link>
        </li>
        <li className=" -mt-14 w-16 h-16 border-4 border-dark-1 bg-yellow-1 rounded-full">
          <Link href={"/new"} className=" w-full h-full flex items-center justify-center">
            <Image
              src={"/assets/icons/plus-without-circle-icon.svg"}
              alt="home"
              width={24}
              height={24}
            />
          </Link>
        </li>
        <li>
          <Link href={"/tranding"}>
            <Image src={"/assets/icons/activity-icon.svg"} alt="home" width={24} height={24} />
          </Link>
        </li>
        <li>
          <Link href={"/register"}>
            <Image src={"/assets/icons/user-dark-icon.svg"} alt="home" width={20} height={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Bottombar;
