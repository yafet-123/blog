import CountUp from 'react-countup';
import Image from 'next/image';
import { TextGenerateEffect } from '../shared/TextGenerateEffect';
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

const Hero = ({
  title,
  description,
  style,
  HeroImages,
}) => {
  const AboutData = [
    { id: 1, numbers: '5', title: 'Customers' },
    { id: 2, numbers: '100', title: 'Products' },
    { id: 3, numbers: '10', title: 'Members' },
  ];
  var settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    arrows:false,
  };
  const router = useRouter();

  return (
    <div className={`text-white flex flex-col items-center justify-between w-full h-full lg:h-[38rem] pt-32 bg-[#050d1a]`}>
      <div className="flex flex-col lg:flex-row w-full px-2 lg:px-5 mb-5">
        <TextGenerateEffect
          words={title}
          className="text-left text-4xl lg:text-6xl w-full lg:w-[65%]"
        />
        <div className="flex flex-col w-full lg:w-[35%]">
          <p className="text-white font-semibold text-left md:tracking-wider mb-5 text-lg md:text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex flex-row justify-between gap-5">
            {AboutData.map((item, index) => (
              <div
                key={index}
                className={`p-1 flex flex-col`}
              >
                <h1 className="md:text-xl font-bold text-lg text-white text-center mb-2">
                  <CountUp start={0} end={item.numbers} duration={2} />
                  {item.id == 1 ? 'K' : ''} + {/* Display current count */}
                </h1>
                <h1 className="md:text-md font-bold text-center text-white">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div> 
      </div>

      <div className="w-full lg:w-3/4 px-2">
        <Slider {...settings}>
          {HeroImages.map((data, index) => (
            <div key={index} className="relative h-96 lg:h-[400px] ">
              <Image
                layout="fill"
                src={data.image}
                className="border rounded-xl"
                alt={`Gallery image for `}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
