import React from "react";
import Mufasa from "../assets/images (12).jpg";
import CaptainAmerica from "../assets/download.jpg";

import KraventheHunter from "../assets/download (3).jpg";
import TheBatman from "../assets/download (2).jpg";
import Superman from "../assets/download (1).jpg";
import Avengers from "../assets/download (4).jpg";
const ComingSoon = () => {
  return (
    <div className="my-10">
      <h2 className="text-5xl font-bold mb-5">Coming Soon</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-3">
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src={CaptainAmerica}
            alt=""
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabindex="0"
              role="link"
            >
              Captain America
            </a>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src={KraventheHunter}
            alt=""
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabindex="0"
              role="link"
            >
              Kraven The Hunter
            </a>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img className="object-cover w-full h-56" src={TheBatman} alt="" />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabindex="0"
              role="link"
            >
              The Batman
            </a>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img className="object-cover w-full h-56" src={Superman} alt="" />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabindex="0"
              role="link"
            >
              Superman
            </a>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-56"
            src={CaptainAmerica}
            alt=""
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabindex="0"
              role="link"
            >
              Captain America
            </a>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img className="object-cover w-full h-56" src={Avengers} alt="" />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 dark:text-white"
              tabindex="0"
              role="link"
            >
              Avengers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
