import CountUp from 'react-countup';
import Image from 'next/image';
import { TextGenerateEffect } from '../shared/TextGenerateEffect';
import { useRouter } from "next/router";
import heroImage1 from '../../public/hero/home/home (1).jpg';
import heroImage2 from '../../public/hero/home/home (2).jpg';
import heroImage3 from '../../public/hero/home/home (3).jpg';

const Hero = ({title, description}) => {
  const HeroImages = [
    {
      id: 1,
      image: heroImage1,
    },
    {
      id: 2,
      image: heroImage2,
    },
    {
      id: 3,
      image: heroImage3,
    },
  ];
  return (
    <div className={`text-white flex flex-col lg:flex-row items-center justify-between w-full h-full pt-32 pb-10 bg-[#050d1a] px-5 lg:px-10`}>
      <div className="w-full lg:w-[60%]">
        <div className="w-96 md:w-full h-96 md:h-[500px] relative mb-5">
            <Image
              className=""
              alt="why choose us image"
              src={heroImage1}
              layout="fill"
              objectFit="cover"
            />
          </div>
      </div>

      <div className="flex flex-col w-full lg:w-[40%] mb-5 lg:pr-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {HeroImages.map((data, index) => (
            <div 
              key={index}
              className={`relative h-96 lg:h-[350px] border rounded-xl `}
            >
              <Image
                layout="fill"
                src={data.image}
                className="border rounded-xl"
                alt={`Gallery image for `}
              />
            </div>
          ))}
        </div>

        <TextGenerateEffect
          words={title}
          className="text-left text-4xl lg:text-6xl w-full"
        />
        <div className="flex flex-col w-full">
          <p className="text-white font-semibold text-left md:tracking-wider mb-5 text-lg md:text-lg lg:text-xl">
            {description}
          </p>
        </div> 
      </div>
    </div>
  );
};

export default Hero;
