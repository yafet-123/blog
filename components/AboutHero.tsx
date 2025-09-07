import Image from 'next/image';
import { TextGenerateEffect } from '../shared/TextGenerateEffect';
import CountUp from 'react-countup';


const Hero = ({
  title,
  description,
  style,
  HeroImages,
}) => {
  const FollowingTheDreamData = [
    { id: 1, numbers: '10', title: 'Happy Travelers' },
    { id: 2, numbers: '200', title: 'Destinations' },
    { id: 3, numbers: '100', title: 'Team Members' },
  ];
  return (
    <div
      className={`text-white flex flex-col ${style} items-center justify-between w-full h-full lg:h-[45rem] pt-24`}
    >
      <div className="w-full lg:w-1/2 px-5 lg:px-10">
        <TextGenerateEffect
          words={title}
          className="text-left text-[40px] md:text-4xl lg:text-5xl"
        />
        <p className="text-black font-semibold text-left md:tracking-wider mb-4 text-lg md:text-xl lg:text-2xl">
          {description}
        </p>
        <div className="flex md:flex-row flex-col justify-between gap-5">
          {FollowingTheDreamData.map((item, index) => (
            <div
              key={index}
              className={`p-3 box flex flex-col border-8 hover:border-primaryColor 
                hover:bg-emerald-600 hover:scale-110 transition active:scale-105 after:scale-105`}
            >
              <h1 className="md:text-2xl font-bold text-xl text-white text-center mb-5">
                <CountUp start={0} end={item.numbers} duration={2} />
                {item.id == 1 ? 'K' : ''} + {/* Display current count */}
              </h1>
              <h1 className="md:text-xl font-bold text-lg text-center text-white">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full lg:w-3/4 px-5 lg:px-10 h-full py-5 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="w-full h-[20rem] relative mb-5 lg:mb-0 rounded-2xl overflow-hidden shadow-lg pb-5 lg:pb-0">
            <Image
              className=""
              alt="About Hero image 1"
              src={HeroImages[0].image.src}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="hidden lg:flex w-full h-[20rem] relative mb-5 lg:mb-0 rounded-2xl overflow-hidden shadow-lg pb-5 lg:pb-0">
            <Image
              className=""
              alt="About Hero image 2"
              src={HeroImages[1].image.src}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="hidden lg:flex w-full h-full lg:h-[13rem] relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            className=""
            alt="About Hero image 3"
            src={HeroImages[2].image.src}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
