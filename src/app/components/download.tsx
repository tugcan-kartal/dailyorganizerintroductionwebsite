import React from "react";
import { MdDownload } from "react-icons/md";

const Download = () => {
  return (
    <div id="download" className="mx-auto my-[10%] rounded-2xl">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 leading-snug">
          Kolay ve pratik AI entegreli uygulama ile en zor işleri ücretsiz hallet
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          Mobil ve PC sürümü mevcut, hemen deneyin!
        </p>
        <div className="mt-6 flex flex-col items-center">
          <button className="bg-blue-500 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
            Ücretsiz Başla
          </button>
          <div className="flex items-center gap-x-3 mt-4 text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300">
            <MdDownload size={24} />
            <span className="text-sm font-medium">Download With PlayStore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
