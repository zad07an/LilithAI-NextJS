import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <section className=" w-full h-screen flex items-center justify-center sm:px-10 px-5">
      <form
        action=""
        className=" lg:w-1/2 sm:w-3/4 w-full flex items-center flex-col gap-5 p-5 bg-dark-2 rounded-xl"
      >
        <header className=" my-2 text-center">
          <h2 className=" text-2xl font-semibold text-light-1">Login</h2>
          <p className=" mt-2 text-light-2 font-semibold">Let's start the journey now!</p>
        </header>
        <input
          type="email"
          placeholder="Email"
          className=" w-full bg-transparent border border-yellow-1 rounded-md px-4 py-2 outline-none text-light-1 placeholder:text-light-1"
        />
        <input
          type="password"
          placeholder="Password"
          className=" w-full bg-transparent border border-yellow-1 rounded-md px-4 py-2 outline-none text-light-1 placeholder:text-light-1"
        />
        <Button>Log In</Button>
        <div className=" mt-2 flex items-center justify-center gap-2 text-sm text-light-1">
          <span>Do you haven't account?</span>
          <Link href={"/register"} className=" text-yellow-1 hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
