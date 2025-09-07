import Image from "next/image";
import { useState } from "react";
import Link from "next/link"
import ReactModal from "react-modal";
import Loader from "../common/Loading";
import { useRouter } from "next/router";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaYoutube,
  FaTwitter,
  FaTelegram,
  FaTiktok,
  FaTripadvisor,
} from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Display({ data }) {
  console.log(data)
  const [paddingTop, setPaddingTop] = useState("0");
  const dataImage = data.otherImage
  const socialMediaLinks = [
    {
      icon: <FaFacebook size={30} color="blue" />,
      path: '#',
    },
    {
      icon: <FaInstagram size={30} color="black" />,
      path: '#',
    },
    {
      icon: <FaTelegram size={30} color="#4f39f6" />,
      path: '#',
    },
    {
      icon: <MdEmail size={30} color="black" />,
      path: '#',
    }
  ];

  var settings = {
    dots: true,
    autoPlay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="flex flex-col px-5 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
        <div 
          className={`col-start-1 flex flex-col items-left font-serif antialiased leading-loose tracking-wide 
          lg:mr-20 w-full lg:w-[75%]`}
        >
          <h1 className={`text-left font-poppins font-semibold xs:text-[24px] xs:leading-[25px] text-[30px] leading-[26px] 
          tracking-[0.25%] text-black mb-5`}>
            {data.name}
          </h1>

          <p className={`font-poppins xs:text-[20px] xs:leading-[27px] text-[20px] leading-[23px] font-normal xl:w-[85%] 
          sm:w-[75%] w-[100%] text-left text-black mb-5`}>
            {data.description}
          </p>

          <p className={`font-poppins xs:text-[20px] xs:leading-[27px] text-[18px] leading-[23px] font-normal xl:w-[85%] 
          sm:w-[75%] w-[100%] text-left text-black mb-5`}>
            {data.group}
          </p>

          <p className={`font-poppins xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal xl:w-[85%] 
          sm:w-[85%] w-[100%] text-left text-black mb-5`}>
            {data.price}
          </p>
          <div className="flex flex-row justify-between items-center text-gray-400">
            {socialMediaLinks.map((paths, index) => (
              <Link href={paths.path} key={index}>
                <a className="relative inline-block max-w-max font-bold uppercase tracking-wider group">
                  {paths.icon}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="w-full !h-[20rem] relative mb-5 flex md:items-start" style={{ paddingTop }}>
            <Image
              src={data.image}
              layout="fill"
              objectFit="contain"
              onLoad={({ target }) => {
                const { naturalWidth, naturalHeight } = target;
                setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
              }}
              alt="latest news image"
            />
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              {dataImage.map((file, index) => (
                <div className="w-full !h-[5rem] relative mb-5 lg:mb-0 flex md:items-start" style={{ paddingTop }}>
                  <Image
                    src={file}
                    layout="fill"
                    objectFit="contain"
                    onLoad={({ target }) => {
                      const { naturalWidth, naturalHeight } = target;
                      setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
                    }}
                    alt="latest news image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>      
    </div>
  );
}
