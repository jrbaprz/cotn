import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#eae9e5] px-5 py-16">
        <div className="text-center text-xl xl:text-3xl xl:w-[52rem] xl:mx-auto">
          Fusce tincidunt laoreet lorem, vitae tempor metus ultrices non. Morbi
          eget elit scelerisque, maximus augue vitae, porta.
        </div>
        <div className="text-center text-xs font-light pt-8 xl:text-xl">
          Nam $10 mauris enim. Aliquam ultricies, eros a faucibus varius, massa
          odio.
        </div>
        <form className="pt-8 border-b-black border-[1px] flex mx-auto md:w-96">
          <input
            className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 focus:outline-none placeholder:text-sm"
            type="text"
            placeholder="you@email.com"
            aria-label="Name"
          />
          <div className="flex w-1/3">
            <div className="flex w-3/4 justify-center items-center text-sm">
              Sign Up
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="h-3 w-4 my-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </form>
        <section className="flex flex-wrap justify-center p-8 pt-10 gap-6 text-sm">
          <div>About Us</div>
          <div>Careers</div>
          <div>Help</div>
          <div>Returns & Exchanges</div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
