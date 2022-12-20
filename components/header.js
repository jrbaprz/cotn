import React from "react";

const Header = () => {
  return (
    <>
      <nav className="fixed z-50">
        <section>
          <div className="w-screen bg-gray-200 p-1">
            <span className="text-xs flex justify-center items-center">
              Get your order in by 12/25! See shipping guide for more details.
            </span>
          </div>
        </section>

        <section className="bg-white grid grid-cols-3 justify-center items-center w-screen p-3">
          <div className="flex mr-auto gap-2">
            <div>Menu</div>
            <div>Search</div>
          </div>
          <div className="text-center text-xl font-extrabold tracking-widest">
            COTN
          </div>
          <div className="flex ml-auto gap-2">
            <div>Help</div>
            <div>Cart</div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Header;
