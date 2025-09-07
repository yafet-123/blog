import Image from 'next/image';
import React from 'react';
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-rating-stars-component";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Selamawit M.",
      type:"Homeowner",
      date:"2020-04-18",
      image: "/testimony 2.jpg",
      star: 5,
      description:
        `From start to finish, the experience was flawless. The custom table they designed for our dining room has become the 
        centerpiece of our home. Beautiful work`,
    },
    {
      name: "Kebede T.",
      type:"Interior Designer",
      date:"2020-04-18",
      image: "/testimony 3.jpg",
      star: 5,
      description:
        `We were looking for furniture that matched both our aesthetic and values. Their eco-conscious approach and 
        quality craftsmanship truly impressed us.`,
    },
    {
      name: "Hanna G.",
      type:"Business Owner",
      date:"2020-04-18",
      image: "/testimony 4.jpg",
      star: 5,
      description:
        `Exceptional service, great communication, and 
        stunning furniture! Our office space has been completely transformed thanks to their creative design.`,
    },
    {
      name: "Abel M.",
      type:"Architect",
      date:"2020-04-18",
      image: "/testimony 1.jpg",
      star: 5,
      description:
        `We loved how they involved us in the design process. The final product exceeded our expectations in every way.`,
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 3000,
    arrows:false,
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
    <div className="text-center py-20 bg-[#fff]">
      <div className="flex flex-col flex-grow justify-between mx-8">
        <div className="lg:px-52">
          <h1 className="text-3xl md:text-5xl text-[#106156] font-bold my-4">
            Our Clients’ Stories
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-bold my-4">
            {`Discover how we’ve made a lasting impact on those we’ve worked with. From global partners to local 
            collaborators, our clients' stories reflect the trust, results, and value we bring to every project. 
            Their words inspire us to keep pushing boundaries and delivering excellence — every step of the way.`}
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((person, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-around items-center w-full h-full lg:h-[350px] p-6 gap-4 bg-[#c74c49]
                text-white hover:text-black hover:bg-white hover:text-black transition duration-300 border-primaryColor shadow-md shadow-slate-500"
              >
                <div className="mb-5">
                  <p className="  md:text-md px-2 text-justify">
                    {' '}
                    <span className="font-extrabold "> &#10077;</span>{' '}
                    {person.description}
                    <span className="font-extrabold"> &#10078;</span>
                  </p>
                </div>

                <div className="">
                  <Image
                    src={person.image}
                    alt="Testimony image"
                    height={75}
                    width={75}
                    priority
                    className="w-28 h-28 rounded-full"
                  />

                  <h2 className="md:text-xl text-lg font-bold">
                    {person.name}
                  </h2>

                  <h2 className="text-md font-normal mb-5">
                    {person.type}
                  </h2>

                  <div className="flex justify-center items-center">
                    <ReactStars
                      count={5}
                      value={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
