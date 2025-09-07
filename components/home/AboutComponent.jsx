import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AboutMissionOne from "../../public/home_page/about.jpg";
import about2 from "../../public/image/project2.jpg";
import about3 from "../../public/image/project3.jpg";

export default function AboutComponent() {
  const [paddingTop, setPaddingTop] = useState("0");
  return (
    <div className="flex relative">
      <div className="grid grid-cols-1 md:grid-cols-2 pb-12 px-3 bg-[#fff] py-10 lg:px-32 md:gap-5 lg:gap-0 px-5">
        <div
          className={`
            z-50 lg:w-[110%] lg:h-[22rem] flex flex-col lg:px-10 justify-start text-justify 
            gap-4 lg:mt-24 lg:bg-[#EDF1F4] py-5`}
        >
          <h2 className="font-bold text-2xl md:text-4xl text-left lg:text-black">
            About Us
          </h2>
          <p className="md:text-lg text-md text-left lg:text-black font-normal">
            At the heart of global trade, we specialize in connecting businesses across borders with reliable import and 
            export solutions. Our mission is simple — to streamline the flow of goods, support growth, and build trusted 
            relationships worldwide.
            With a focus on efficiency, transparency, and customer satisfaction, we handle every detail from sourcing 
            and shipping to customs and delivery.
          </p>
          <Link href="/about">
            <a className="bg-[#c74c49] text-white border border-transparent rounded-xl py-2 px-5 text-center font-bold w-52">
              View More
            </a>
          </Link>
        </div>
        <div className="flex justify-center z-10">
          <div className="w-96 md:w-full h-96 md:h-[500px] relative mb-5">
            <Image
              className=""
              alt="why choose us image"
              src={AboutMissionOne}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex absolute left-[47%] h-full w-20 bg-[#c74c4a]">
        
      </div>
    </div>
  );
}