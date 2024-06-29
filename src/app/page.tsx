import MaxWidthWrapper from "@/components/MaxWIdthWrapper";
import { Navbar } from "./Navbar";
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";


export default function Home() {
  return (
      <MaxWidthWrapper className="px-8 mb-12 text-center min-h-screen">
      <Navbar />
        <div className="items-center mx-auto w-[80%] mt-6">
        <div className="hero-content">
          <h1 className="prose text-black max-w-4xl leading-tight text-5xl font-bold md:text-6xl mx-auto">
            Upgrade your quality of life with the newest <span className="text-[#934BFC]">planning</span> system on the plan it
          </h1>
          <p className="mt-5 max-w-prose leading-tight text-zinc-700 text-xl md:text-2xl w-full mb-8 mx-auto">
          Planning your daily life has never been easier. Create the mental space in a way that works for you using our tools.
          </p>
          <Button variant='default' className="hidden md:flex mx-auto text-lg tracking-wider">Create a free account<MdArrowOutward /></Button>
        </div>
        <img src={'./images/hero-img.png'} className="w-[90%] md:w-[50%] md:top-0 mx-auto mt-6"/>
        <Button variant='default' className="flex mx-auto my-8 md:hidden w-[80%]">Create a free account<MdArrowOutward /></Button>
        </div>
      </MaxWidthWrapper>
  );
}
