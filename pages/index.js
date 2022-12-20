import React from "react";
import Image from "next/image";
import Hero from "../assets/images/hero.jpg";
import Carousel from "../components/carousel";

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

      <section className="p-12 gap-12 grid">
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

      <div className="flex justify-center items-center p-8 text-xl">
        New Arrivals
      </div>
      <Carousel />

      <section>
        <span className="flex justify-center items-center text-5xl underline p-4">
          Instagram@cotn
        </span>
        <div className="relative grid grid-cols-2 p-4 gap-4 md:grid-cols-4">
          <div>
            <Image src={Hero} alt="Photo of clothes" width={200} />
          </div>
          <div>
            <Image src={Hero} alt="Photo of clothes" width={200} />
          </div>
          <div>
            <Image src={Hero} alt="Photo of clothes" width={200} />
          </div>
          <div>
            <Image src={Hero} alt="Photo of clothes" width={200} />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
