import Chat from "@/components/chat/Chat";
import ResentChats from "@/components/resent-chats/ResentChats";
import React from "react";

const Dashboard = () => {
  return (
    <section className=" w-full h-screen grid lg:grid-cols-[1fr_2fr] gap-16 md:px-10 px-5 my-10">
      <div className=" lg:block hidden">
        <ResentChats />
      </div>
      <Chat />
    </section>
  );
};

export default Dashboard;
