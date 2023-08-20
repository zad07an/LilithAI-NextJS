"use client";

import Image from "next/image";
import React from "react";

const Disclaimer = () => {
  return (
    <section className=" w-full py-20 md:px-32 px-5 flex items-center justify-center md:flex-row flex-col gap-10 bg-dark-2 text-center">
      <Image src={"/assets/images/warning.svg"} alt="disclaimer" width={100} height={160} />
      <p className=" text-light-1">
        While LilithAI strives to provide accurate and up-to-date legal information, it should not
        be considered a substitute for professional legal advice. Always consult a qualified
        attorney for specific legal matters. The information provided on this platform is for
        general informational purposes only.
      </p>
    </section>
  );
};

export default Disclaimer;
