import React from "react";
import Image from "next/image";
import Hero from "../assets/images/hero.jpg";
import Carousel from "../components/carousel";
import cotton from "../public/cotton.jpg";

const index = () => {
  return (
    <>
      <section className="overflow-hidden flex items-center justify-center h-screen">
        <div className="h-screen">
          <Image
            src={Hero}
            alt="Photo of clothes"
            className="z-10 responsive object-cover"
            fill
            priority
          />
        </div>
        <div className="z-20 container mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl text-white tracking-wide">
            The Perfect Essentials
          </h1>
          <div className="flex justify-center mt-8 gap-6">
            <div className="border w-32 py-1 bg-black bg-opacity-50 hover:bg-white duration-300 group hover:text-white">
              <span className="text-xs text-white uppercase font-akkurat tracking-widest group-hover:text-black">
                Shop Mens
              </span>
            </div>

            <div className="border w-32 py-1 bg-black bg-opacity-50 hover:bg-white duration-300 group hover:text-white">
              <span className="text-xs text-white uppercase font-akkurat tracking-widest group-hover:text-black">
                Shop Womens
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="p-12 gap-12 grid md:hidden">
        <div className="container mx-auto flex flex-col items-center text-center border-black border-[1px] p-4">
          <h1 className="tracking-wide">Menswear</h1>
        </div>
        <div className="container mx-auto flex flex-col items-center text-center border-black border-[1px] p-4">
          <h1 className="tracking-wide">Womenswear</h1>
        </div>
        <div className="container mx-auto flex flex-col items-center text-center border-black border-[1px] p-4">
          <h1 className="tracking-wide">Accessories</h1>
        </div>
      </section>

      <section className="p-12 gap-12 hidden md:grid grid-cols-3 xl:p-16 xl:gap-16">
        <div className="relative flex items-center justify-center h-96 xl:h-[32rem]">
          <Image
            src={Hero}
            alt="Photo of clothes"
            className="object-cover"
            fill
          />
          <h1 className="absolute text-2xl text-white xl:text-5xl xl:font-light">
            Menswear
          </h1>
        </div>
        <div className="relative flex items-center justify-center h-96 xl:h-[32rem]">
          <Image
            src={Hero}
            alt="Photo of clothes"
            className="object-cover"
            fill
          />
          <h1 className="absolute text-2xl text-white xl:text-5xl xl:font-light">
            Womenswear
          </h1>
        </div>
        <div className="relative flex items-center justify-center h-96 xl:h-[32rem]">
          <Image
            src={Hero}
            alt="Photo of clothes"
            className="object-cover"
            fill
          />
          <h1 className="absolute text-2xl text-white xl:text-5xl xl:font-light">
            Accessories
          </h1>
        </div>
      </section>

      <div className="flex justify-center items-center p-8 text-xl">
        New Arrivals
      </div>
      <Carousel />

      <section className="pt-8 md:grid grid-cols-2 md:p-4 md:gap-8 xl:py-8">
        <div className="relative order-2 flex items-center">
          <Image
            className="p-6 md:h-[38rem] object-cover md:p-0"
            src={cotton}
            alt="Picture of cotton field"
          />
        </div>
        <div className="px-8 py-4 flex flex-col gap-6 justify-center md:p-8">
          <h1 className="text-5xl md:text-7xl">
            Etiam maximus, turpis ut blandit egestas, turpis massa
          </h1>
          <p className="md:text-xl">
            Sed condimentum dui volutpat maximus scelerisque. Vivamus nec
            tincidunt lectus. Pellentesque mollis semper lorem, et consectetur
            sem.
          </p>
        </div>
      </section>

      <section>
        <span className="flex justify-center items-center text-5xl underline p-4 md:py-8 xl:text-6xl">
          Instagram@blank
        </span>
        <div className="relative grid grid-cols-2 p-4 gap-4 md:grid-cols-4">
          <div className="flex justify-center relative md:h-52 xl:h-96">
            <Image
              className="object-cover"
              src={Hero}
              alt="Photo of clothes"
              fill
            />
          </div>
          <div className="flex justify-center relative md:h-52 xl:h-96">
            <Image
              className="object-cover"
              src={Hero}
              alt="Photo of clothes"
              fill
            />
          </div>
          <div className="flex justify-center relative md:h-52 xl:h-96">
            <Image
              className="object-cover"
              src={Hero}
              alt="Photo of clothes"
              fill
            />
          </div>
          <div className="flex justify-center relative md:h-52 xl:h-96">
            <Image
              className="object-cover"
              src={Hero}
              alt="Photo of clothes"
              fill
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
