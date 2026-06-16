"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SkillData } from "@/utils/lib/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import SkillsOrbit from "@/components/Orbit";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <SkillsOrbit/>
      <div> <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div></div>

  );
};

export default Page;
