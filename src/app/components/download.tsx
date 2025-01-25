import React from "react";
import { MdDownload } from "react-icons/md";

const Download=()=>{
    return(
        <div className="mx-auto my-[10%]">
            <div className="flex flex-col justify-center items-center">
                <div className="text-5xl">Kolay ve pratik ai entegreli uygulama ile en zor işleri hallet</div>
                <div className="text-xl text-gray-400 mt-[3vh]">Mobil ve Pc sürümü mevcut</div>
                <div className="mt-[2vh]">
                    <div className="text-lg bg-blue-400 text-white px-3 py-2 text-center rounded-2xl hover:opacity-90 cursor-pointer">Start Free</div>
                    <div className="text-gray-400 flex gap-x-4 justify-center items-center mt-3">
                        <div><MdDownload /></div>
                        <div>Download with play store</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download;