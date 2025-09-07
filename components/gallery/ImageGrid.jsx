import Image from 'next/image';
import {useState} from "react"
import { TextGenerateEffect } from '../shared/TextGenerateEffect';

import gallery1 from "../../public/gallery/gallery (1).jpg";
import gallery2 from "../../public/gallery/gallery (2).jpg";
import gallery3 from "../../public/gallery/gallery (3).jpg";
import gallery4 from "../../public/gallery/gallery (4).jpg";
import gallery5 from "../../public/gallery/gallery (5).jpg";
import gallery6 from "../../public/gallery/gallery (6).jpg";
import gallery7 from "../../public/gallery/gallery (7).jpg";
import gallery8 from "../../public/gallery/gallery (8).jpg";
import gallery9 from "../../public/gallery/gallery (9).jpg";
import gallery10 from "../../public/gallery/gallery (10).jpg";
import gallery11 from "../../public/gallery/gallery (11).jpg";
import gallery12 from "../../public/gallery/gallery (12).jpg";
import gallery13 from "../../public/gallery/gallery (13).jpg";
import gallery14 from "../../public/gallery/gallery (14).jpg";
import gallery15 from "../../public/gallery/gallery (15).jpg";
import gallery16 from "../../public/gallery/gallery (16).jpg";
import gallery17 from "../../public/gallery/gallery (17).jpg";
import gallery18 from "../../public/gallery/gallery (18).jpg";
import gallery19 from "../../public/gallery/gallery (19).jpg";
import gallery20 from "../../public/gallery/gallery (20).jpg";
import gallery21 from "../../public/gallery/gallery (21).jpg";
import gallery22 from "../../public/gallery/gallery (22).jpg";
import gallery23 from "../../public/gallery/gallery (23).jpg";
import gallery24 from "../../public/gallery/gallery (24).jpg";
import gallery25 from "../../public/gallery/gallery (25).jpg";
import gallery26 from "../../public/gallery/gallery (26).jpg";
import gallery27 from "../../public/gallery/gallery (27).jpg";
import gallery28 from "../../public/gallery/gallery (28).jpg";
import gallery29 from "../../public/gallery/gallery (29).jpg";
import gallery30 from "../../public/gallery/gallery (30).jpg";
import gallery31 from "../../public/gallery/gallery (31).jpg";
import gallery32 from "../../public/gallery/gallery (32).jpg";
import gallery33 from "../../public/gallery/gallery (33).jpg";
import gallery34 from "../../public/gallery/gallery (34).jpg";
import gallery35 from "../../public/gallery/gallery (35).jpg";
import gallery36 from "../../public/gallery/gallery (36).jpg";
import gallery37 from "../../public/gallery/gallery (37).jpg";
import gallery38 from "../../public/gallery/gallery (38).jpg";
import gallery39 from "../../public/gallery/gallery (39).jpg";

const ImageGrid = () => {
  const [menu, setMenu] = useState("All");
  const gallerysArray = [
    { id: 1, image: gallery1, ar: "portrait", select: "landscape", category:"Featured Exports" },
    { id: 2, image: gallery2, ar: "portrait", select: "square", category:"Featured Exports" },
    { id: 3, image: gallery3, ar: "portrait", select: "landscape", category:"Featured Exports" },
    { id: 4, image: gallery4, ar: "portrait", select: "landscape", category:"Featured Exports" },
    { id: 5, image: gallery5, ar: "portrait", select: "landscape", category:"Featured Exports" },
    { id: 6, image: gallery6, ar: "portrait", select: "landscape", category:"Featured Exports" },
    { id: 7, image: gallery7, ar: "portrait", select: "landscape", category:"Featured Exports" },
    { id: 8, image: gallery8, ar: "portrait", select: "landscape", category:"Featured Exports" },
    { id: 9, image: gallery9, ar: "portrait", select: "landscape", category:"Featured Exports" },
    { id: 10, image: gallery10, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 11, image: gallery11, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 12, image: gallery12, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 13, image: gallery13, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 14, image: gallery14, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 15, image: gallery15, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 16, image: gallery16, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 17, image: gallery17, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 18, image: gallery18, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 19, image: gallery19, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 20, image: gallery20, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 21, image: gallery21, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 22, image: gallery22, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 23, image: gallery23, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 24, image: gallery24, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 25, image: gallery25, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 26, image: gallery26, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 27, image: gallery27, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 28, image: gallery28, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 29, image: gallery29, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 30, image: gallery30, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 31, image: gallery31, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 32, image: gallery32, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 33, image: gallery33, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 34, image: gallery34, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 35, image: gallery35, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 36, image: gallery36, ar: "portrait", select: "landscape" , category:"Premium Imports" },
    { id: 37, image: gallery37, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 38, image: gallery38, ar: "portrait", select: "landscape" , category:"Featured Exports" },
    { id: 39, image: gallery39, ar: "portrait", select: "landscape" , category:"Featured Exports" },
  ];
  console.log(menu)
  const GallerySectionData = [
    {
      id:"1",
      name:"All",
      link:"",
    },
    {
      id:"2",
      name:"Featured Exports",
      link:"",
    },
    {
      id:"3",
      name:"Premium Imports",
      link:"",
    },
  ]
  return (
    <main className="flex flex-col py-5 px-5 pt-10 lg:pt-32">
      <div className="flex flex-col lg:flex-row justify-between pb-5">
        <h1 className="font-bold text-left text-2xl lg:text-3xl mb-5 lg:mb-0" >
          From Our Gallery
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          { GallerySectionData.map((data,index)=>(
            <button 
              key={index}
              onClick={() => setMenu(data.name)} 
              className={`${data.name == menu ? 'bg-[#fff] text-[#c74c49]' : 'bg-[#c74c49] text-white' } hover:bg-[#fff] 
              hover:text-[#c74c49] py-1 px-2 text-center border 
              border-transparent w-32 rounded-xl font-bold mx-2`}
            >
              {data.name}
            </button>
          ))}
        </div>
      </div>
      <div className="columns-1 gap-x-4 gap-y-4 md:columns-2 lg:columns-3 lg:gap-x-8 ">

        {gallerysArray.filter((item) => menu === 'All' || item.category === menu).map(({ id, image, ar, select }) => (
          <figure
            key={id}
            className={`relative mb-4 overflow-hidden rounded bg-neutral-two dark:bg-neutral-nine 
              ${select === 'square' ? 'aspect-square' : select === 'landscape' ? 'aspect-landscape' : 'aspect-portrait'}
              md:mb-4 lg:mb-8`}
            style={{ position: 'relative', width: '100%', height: 'auto' }} // Ensure `figure` has dimensions
          >
            <Image
              src={image}
              alt={select}
              fill
              priority={ar === 'portrait'}
              loading={ar === 'portrait' ? 'eager' : 'lazy'}
              sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
              className="object-cover duration-700 ease-in-out group-hover:cursor-pointer group-hover:opacity-90"
            />
          </figure>
        ))}
      </div>
    </main>
  );
};

export default ImageGrid;
