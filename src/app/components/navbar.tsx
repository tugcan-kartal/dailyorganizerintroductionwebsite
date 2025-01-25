import Image from "next/image";
import React from "react";
import LogoTransparent from "@/../public/logo-transparent.png"

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between">

        <div className="flex justify-center items-center">
          <div>
            <Image
              className="md:w-[5vw] w-[15vw]"
              src={LogoTransparent}
              alt="not found"
            />
          </div>
          <div className="md:text-xl font-semibold">Taskly Adviser AI</div>
        </div>

        <div className="flex justify-center items-center gap-x-[1vw] pr-5">
            <div className="border-r-2 border-gray-200 pr-5 cursor-pointer text-lg">Features</div>
            <div className="cursor-pointer text-lg">Sign In</div>
            <div className="cursor-pointer text-lg px-4 py-1 bg-blue-300 rounded-2xl text-white">Sign Up</div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
