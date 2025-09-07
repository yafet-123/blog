import Image from 'next/image';
import { TextGenerateEffect } from '../shared/TextGenerateEffect';

const Hero = ({
  title,
  description,
  HeroImages,
}) => {
  return (
    <div
      className={`text-white grid grid-cols-1 lg:grid-cols-3 gap-5 w-full h-full lg:h-[45rem] pt-24 px-5 lg:px-10`}
    >
      <div className="hidden lg:flex flex-col">
        <div className="w-full h-full lg:h-[15rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5 lg:py-0">
          <Image
            className=""
            alt="Tour Hero Image 1"
            src={HeroImages[0].image.src}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="w-full h-full lg:h-[15rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5 lg:py-0">
          <Image
            className=""
            alt="Tour Hero Image 2"
            src={HeroImages[1].image.src}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="lg:px-5">
        <TextGenerateEffect
          words={title}
          className="text-left text-[40px] md:text-4xl lg:text-5xl"
        />
        <p className="text-black font-semibold text-left md:tracking-wider mb-5 text-lg md:text-xl lg:text-2xl">
          {description}
        </p>
      </div>

      <div className="flex flex-col py-10">
        <div className="hidden lg:flex w-full h-[15rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5">
          <Image
            className=""
            alt="Tour Hero Image 3"
            src={HeroImages[2].image.src}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-[25rem] lg:h-[15rem] relative mb-5 rounded-2xl overflow-hidden shadow-lg py-5">
          <Image
            className=""
            alt="Tour Hero Image 4"
            src={HeroImages[3].image.src}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
