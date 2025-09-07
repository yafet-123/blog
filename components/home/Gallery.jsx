import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import GalleryOne from "../../public/home_page/gallery (1).jpg";
import GalleryTwo from "../../public/home_page/gallery (2).jpg";
import GalleryThree from "../../public/home_page/gallery (3).jpg";
import GalleryFour from "../../public/home_page/gallery (4).jpg";
import GalleryFive from "../../public/home_page/gallery (5).jpg";

export default function Gallery() {
  const ImageArray = [
    {
      id: 1,
      image: GalleryOne,
    },
    {
      id: 2,
      image: GalleryTwo,
    },
    {
      id: 3,
      image: GalleryThree,
    },
    {
      id: 4,
      image: GalleryFour,
    },
    {
      id: 5,
      image: GalleryFive,
    },
  ];
  return (
    <div className="flex flex-col py-10 lg:px-10 px-5 bg-[#dedee0]">
      <div className="flex flex-col lg:flex-row mb-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-left w-full lg:w-1/2 ">
          A Glimpse into <span className="text-[#c74c49]">Our World</span>
        </h2>
        <p className="text-base md:text-xl paragraph-fonts text-left w-full lg:w-1/2">
          {`Explore the highlights of our journey a curated showcase of meaningful projects, proud milestones, 
          global connections, and behind the scenes moments that reflect our passion, purpose, and commitment to excellence.`}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 items-center mb-10">
        {ImageArray.map((gallery, index) => (
          <div
            key={index}
            className={`relative  h-full border rounded-xl  ${
              gallery.id == 3 ? "lg:row-span-2  " : ""
            }  `}
          >
            <div
              className={`border rounded-xl ${
                gallery.id == 3 ? "h-[900px] lg:h-[400px]" : "h-[400px]"
              }`}
            >
              <Image
                layout="fill"
                src={gallery.image}
                className="border rounded-xl"
              alt={`Gallery image for ${gallery.Category} `}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mb-5">
        <Link href="/Gallery">
          <a className="bg-[#c74c49] text-white border border-transparent rounded-xl py-3 px-5 text-center font-bold">
            View Full Gallery
          </a>
        </Link>
      </div>
    </div>
  );
}
