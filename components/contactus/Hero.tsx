import Image from 'next/image';
import { TextGenerateEffect } from '../shared/TextGenerateEffect';
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface HeroImage {
  image: {
    src: string;
  };
}
 
interface HeroProps {
  title: string;
  description: string;
  style?: string;
  HeroImages: HeroImage[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  style,
  HeroImages,
}) => {
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
  return (
    <div className={`text-white flex flex-col lg:flex-row items-center justify-between px-5 lg:px-16 w-full h-full lg:h-[35rem] pt-32 bg-[#050d1a]`}>
      <div className="flex flex-col px-2 lg:px-5 mb-5 w-full lg:w-1/2">
        <TextGenerateEffect
          words={title}
          className="text-left text-[40px] text-3xl lg:text-4xl"
        />
        <div className="flex flex-col">
          <p className="text-white font-semibold text-left md:tracking-wider mb-5 text-md lg:text-lg">
            {description}
          </p>
        </div> 
      </div>

      <div className="w-full lg:w-1/2 lg:px-16">
        <Slider {...settings}>
          {HeroImages.map((data, index) => (
            <div key={index} className="relative w-full h-[400px] lg:h-[650px] clip-curve lg:mt-96">
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
