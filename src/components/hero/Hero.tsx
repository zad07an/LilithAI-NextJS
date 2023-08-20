"use client";

import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className=" w-full flex items-center flex-col mt-20">
      <div className=" text-light-1 flex items-center flex-col text-center">
        <h1 className=" font-semibold md:text-4xl text-2xl">
          Simplifying Legal Advice for Everyday Users
        </h1>
        <p className=" md:text-base text-sm mt-5 mb-10">
          LilithAI: Transforming Legal Advice for Users
        </p>
        <div className=" flex items-center justify-center md:flex-row flex-col gap-5">
          <Button onClick={() => router.push("/dashboard")}>Get Started</Button>
          <Button className=" bg-transparent text-yellow-1">How it Works?</Button>
        </div>
      </div>
      <div className=" mt-14">
        <Image src={"/assets/images/hero-image.svg"} alt="hero image" width={824} height={636} />
      </div>
    </section>
  );
};

export default Hero;
