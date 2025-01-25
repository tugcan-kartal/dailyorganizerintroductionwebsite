import React from "react";
import TasksPage from "@/../public/assets/tasksPage.png"
import Image from "next/image";

const HeroSection=()=>{
    return(
        <div>
            <div className="flex gap-x-[5vw] justify-center items-center pt-[5%]">
                <div className="w-[30%] flex flex-col gap-y-[2vh]">
                    <div className="text-5xl font-semibold text-gray-700">Yapman gerekenleri yapay zeka yardımı ile kolaylıkla hallet</div>
                    <div className="text-lg text-gray-600">Basit kullanımı ile pratik şekilde günlük planını ve yardımını al</div>
                    <div className="bg-blue-300 w-[20%] text-center text-white px-2 py-2 rounded-2xl">Start Free</div>
                </div>

                <div className="w-[60%]">
                    <Image className="rounded-2xl border-2 border-gray-200" src={TasksPage} alt="not found"/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;