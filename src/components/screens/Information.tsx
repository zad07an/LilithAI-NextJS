"use client";

import { informationData } from "@/constants";
import React from "react";

const Information = () => {
  return (
    <section className=" w-full flex items-center flex-col gap-5 py-10 md:px-32 px-5 mt-20">
      <h2 className=" text-yellow-1 font-semibold text-lg">Why Choose Us?</h2>
      <ul className=" flex items-center text-start flex-col gap-5">
        {informationData?.map((item, index: number) => (
          <li key={index} className=" text-light-1 list-decimal">
            <p>
              <span className=" text-yellow-1 font-semibold">{item?.title}</span>
              {item?.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Information;
