"use client";

import { footerData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full px-10 md:grid hidden grid-cols-3 gap-5 bg-dark-2 py-6">
      <Link href={"/"}>
        <Image src={"/assets/images/logo.svg"} alt="logo" width={120} height={35} />
      </Link>
      <div className=" flex items-center justify-center gap-5">
        {footerData?.map((icon, index: number) => (
          <Link href={""} key={index}>
            <Image src={icon?.icon} alt={icon?.name} width={24} height={24} />
          </Link>
        ))}
      </div>
      <div className=" flex items-center justify-end">
        <p className=" text-light-1">
          <span className=" text-yellow-1">©</span> 2023 | LilithAI: Transforming Legal Advice for
          Users
        </p>
      </div>
    </footer>
  );
};

export default Footer;
