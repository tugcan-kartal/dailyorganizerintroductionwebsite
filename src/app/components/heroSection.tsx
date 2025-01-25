import React from "react";
import TasksPage from "@/../public/assets/tasksPage.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-[5vw] justify-center items-center pt-[5%] px-4">
      {/* Text Section */}
      <div className="w-full md:w-[40%] flex flex-col gap-y-4 text-center md:text-start">
        <div className="text-3xl md:text-5xl font-semibold text-gray-700">
          Kaos mu? Artık değil! Taskly Adviser AI ile kontrol sizde.
        </div>
        <div className="text-base md:text-lg text-gray-600 leading-relaxed">
          Ücretsiz yapay zeka destekli görev yöneticisiyle her şey yerli
          yerinde: iş hayatınız organize, özel hayatınız rahat. Her günün daha
          planlı, her anın daha verimli olduğu bir dünyaya adım atın.
        </div>
        <div className="bg-blue-300 w-[50%] md:w-[30%] text-center text-white px-4 py-2 rounded-2xl mx-auto md:mx-0 cursor-pointer hover:bg-blue-400 transition duration-300">
          Start Free
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%]">
        <Image
          className="rounded-2xl border-2 border-gray-200 shadow-md"
          src={TasksPage}
          alt="not found"
        />
      </div>
    </div>
  );
};

export default HeroSection;
