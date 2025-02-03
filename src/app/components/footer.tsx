import Image from "next/image";
import React from "react";
import LogoTransparent from "@/../public/logo-transparent.png"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      
      <div className="flex justify-between border-t-2 border-gray-200">
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

        <div className="flex justify-center items-center gap-x-[25%]">
          <div className="md:text-3xl text-gray-600 hover:text-blue-500 cursor-pointer">
            <IoLogoGooglePlaystore />
          </div>

          <div className="md:text-3xl text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaInstagram />
          </div>

          <div className="md:text-3xl text-gray-600 hover:text-blue-500 cursor-pointer">
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link href={"footer/privacy-policy"}>Privacy and Policy</Link>
      </div>

      <div className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Taskly Adviser AI. Tüm hakları saklıdır.
      </div>
    </div>
  );
};

export default Footer;
