import About from "@/components/about/About";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import Hero from "@/components/hero/Hero";
import Information from "@/components/screens/Information";

export default function Home() {
  return (
    <main className=" w-full flex min-h-screen flex-col items-center">
      <section className=" w-full md:px-10 px-5">
        <Hero />
      </section>
      <section className=" w-full md:px-10 px-5">
        <About />
      </section>
      <section className=" w-full">
        <Disclaimer />
      </section>
      <section className=" w-full md:px-10 px-5 pb-20">
        <Information />
      </section>
    </main>
  );
}
