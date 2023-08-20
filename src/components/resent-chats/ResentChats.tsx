"use client";

import { recentChatsData } from "@/constants";
import Image from "next/image";
import React from "react";

const ResentChats = () => {
  return (
    <div className=" border h-full border-light-2 rounded-lg flex items-start flex-col gap-5 px-5 py-10">
      <header>
        <h2 className=" text-2xl text-yellow-1 font-semibold">Recent Chats</h2>
      </header>
      <section className=" w-full h-[600px] flex items-center flex-col gap-5 overflow-y-auto">
        {recentChatsData?.filter(item => item?.date === "today")?.length ? (
          <div className=" w-full flex items-start flex-col gap-5">
            <p className=" text-light-2 text-sm font-semibold">Today</p>
            {recentChatsData
              ?.filter(item => item?.date === "today")
              ?.map((item, index: number) => (
                <div
                  key={index}
                  className=" w-full p-4 flex items-center justify-between gap-5 bg-dark-2 text-light-2 rounded-md"
                >
                  <p>{item?.title}</p>
                  <button>
                    <Image src={item?.icon} alt="remove" width={24} height={24} />
                  </button>
                </div>
              ))}
          </div>
        ) : null}
        {recentChatsData?.filter(item => item?.date === "yesterday")?.length ? (
          <div className=" w-full flex items-start flex-col gap-5">
            <p className=" text-light-2 text-sm font-semibold">Yesterday</p>
            {recentChatsData
              ?.filter(item => item?.date === "yesterday")
              ?.map((item, index: number) => (
                <div
                  key={index}
                  className=" w-full p-4 flex items-center justify-between gap-5 bg-dark-2 text-light-2 rounded-md"
                >
                  <p>{item?.title}</p>
                  <button>
                    <Image src={item?.icon} alt="remove" width={24} height={24} />
                  </button>
                </div>
              ))}
          </div>
        ) : null}
        {recentChatsData?.filter(item => item?.date === "7 days")?.length ? (
          <div className=" w-full flex items-start flex-col gap-5">
            <p className=" text-light-2 text-sm font-semibold">Previous 7 Days</p>
            {recentChatsData
              ?.filter(item => item?.date === "7 days")
              ?.map((item, index: number) => (
                <div
                  key={index}
                  className=" w-full p-4 flex items-center justify-between gap-5 bg-dark-2 text-light-2 rounded-md"
                >
                  <p>{item?.title}</p>
                  <button>
                    <Image src={item?.icon} alt="remove" width={24} height={24} />
                  </button>
                </div>
              ))}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default ResentChats;
