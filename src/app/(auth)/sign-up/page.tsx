import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <section className=" w-full h-screen flex items-center justify-center sm:px-10 px-5">
      <form
        action=""
        className=" lg:w-1/2 sm:w-3/4 w-full flex items-center flex-col gap-5 p-5 bg-dark-2 rounded-xl"
      >
        <header className=" my-2 text-center">
          <h2 className=" text-2xl font-semibold text-light-1">Sign Up Now!</h2>
          <p className=" mt-2 text-light-2 font-semibold">Join us and start your journey today</p>
        </header>
        <div className=" w-full grid grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Name"
            className=" w-full bg-transparent border border-yellow-1 rounded-md px-4 py-2 outline-none text-light-1 placeholder:text-light-1"
          />
          <input
            type="text"
            placeholder="Surname"
            className=" w-full bg-transparent border border-yellow-1 rounded-md px-4 py-2 outline-none text-light-1 placeholder:text-light-1"
          />
        </div>
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
        <Button>Submit</Button>
        <div className=" mt-2 flex items-center justify-center gap-2 text-sm text-light-1">
          <span>Do you have an account?</span>
          <Link href={"/sign-in"} className=" text-yellow-1 hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
