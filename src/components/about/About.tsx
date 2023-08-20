import React from "react";

const About = () => {
  return (
    <section className=" w-full mt-32 mb-24 flex items-center flex-col gap-5 text-light-1 text-center md:px-32">
      <h2 className=" font-semibold text-yellow-1 text-lg">About LilithAI</h2>
      <p>
        At <span className=" text-yellow-1">LilithAI</span>, we understand that navigating the legal
        landscape can be overwhelming and confusing. Our mission is to simplify the complexities of
        law, making it accessible to everyone. Our AI-powered platform has been developed in
        collaboration with legal experts to ensure the highest level of accuracy and reliability in
        the information we provide.
      </p>
    </section>
  );
};

export default About;
