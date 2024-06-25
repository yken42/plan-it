import MaxWidthWrapper from "@/components/MaxWIdthWrapper";
import { Navbar } from "./Navbar";
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";


export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="px-8 mb-12 text-center min-h-screen">
      <Navbar />
        <div className="items-center m-auto md:flex justify-between w-[80%] mt-12">
        <div className="hero-content md:text-left md:w-[35%]">
          <h1 className="prose text-black max-w-4xl leading-tight text-5xl font-bold md:text-4xl">
            Upgrade your quality of life with the newest <span className="text-[#934BFC]">planning</span> system on the plan it
          </h1>
          <p className="mt-5 max-w-prose leading-tight text-zinc-700 text-xl md:text-lg w-full mb-8">
          Planning your daily life has never been easier. Create the mental space in a way that works for you using our tools.
          </p>
          <Button variant='default' className="hidden md:flex">Create a free account<MdArrowOutward /></Button>
        </div>
        <img src={'./images/hero-img.png'} className="w-[90%] md:w-[50%] md:top-0"/>
        <Button variant='default' className="flex mx-auto my-8 md:hidden">Create a free account<MdArrowOutward /></Button>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
