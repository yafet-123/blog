import { useRouter } from 'next/router';
import React from 'react';
import { HeroContentOne } from '../../types/types';
export const CommonHeroSection: React.FC<HeroContentOne> = ({
  title,
  subtitle,
  cssStyle,
}) => {
  const router = useRouter();
  const carRentalPath = router.pathname;

  return (
    <div
      className={`flex justify-center items-center bg-fixed h-[600px] bg-cover top-10 ${cssStyle}`}
    >
      <div className="flex flex-col gap-8 font-bold text-center md:p-12">
        <div>
          <h1 className="text-white text-3xl md:text-6xl md:m-4">{title}</h1>
        </div>
        <div>
          <h1 className="text-white text-xl md:text-3xl md:m-4">{subtitle}</h1>
        </div>
        {carRentalPath === '/car_rental' ? (
          <div className="w-72 self-center ">
            <button
              className="border-4 font-bold cursor-pointer text-white text-3xl py-3 hover:border-white hover:text-primaryColor hover:bg-white
              shadow-sm shadow-white border-white rounded-sm w-72 bg-primaryColor hover:scale-110 transition duration-300  items-center justify-center"
              onClick={() => router.push('/car_rental/car-details')}
            >
              View Our Cars
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
