"use client";
import Image from "next/image";
import React, { useState } from "react";
import LogoTransparent from "@/../public/logo-transparent.png"
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Navbar: React.FC = () => {
  const [openBar,setOpenBar]=useState(false);

  return (
    <div>
      <div className="flex justify-between relative">

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

        <div className="hidden md:flex justify-center items-center gap-x-[1vw] pr-5">
            <Link href="#features" className="cursor-pointer text-lg hover:text-blue-400">Features</Link>
            <Link href="#howitworks" className="cursor-pointer text-lg hover:text-blue-400">How It Works</Link>
            <Link href="#contact" className="cursor-pointer text-lg hover:text-blue-400">Contact</Link>
            <Link href="#download" className="border-r-2 border-gray-200 pr-5 cursor-pointer text-lg hover:text-blue-400">Download</Link>
            <Link href="" className="cursor-pointer text-lg hover:text-blue-400">Sign In</Link>
            <Link href="" className="cursor-pointer text-lg px-4 py-1 bg-blue-300 rounded-2xl text-white">Sign Up</Link>
        </div>

        <div className="md:hidden flex justify-center items-center text-2xl">
          <div onClick={()=>setOpenBar(!openBar)}><MdMenu /></div>
          {openBar &&
            <div className="flex flex-col bg-white absolute right-[3%] top-[100%] p-4 w-[75vw]">
              <Link href="#features" className="cursor-pointer text-lg">Features</Link>
              <Link href="#howitworks" className="cursor-pointer text-lg">How It Works</Link>
              <Link href="#contact" className="cursor-pointer text-lg">Contact</Link>
              <Link href="#download" className="border-r-2 border-gray-200 pr-5 cursor-pointer text-lg">Download</Link>
              <Link href="" className="cursor-pointer text-lg">Sign In</Link>
              <Link href="" className="cursor-pointer text-lg text-blue-400">Sign Up</Link>
            </div>
          }

        </div>

      </div>
    </div>
  );
};

export default Navbar;
