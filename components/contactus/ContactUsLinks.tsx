import React from 'react';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import Link from 'next/link';

export const ContactUsLinks = () => {
  const ServicesArray: Service[] = [
    {
      title: 'CALL US',
      secondTitle: '+251934781038',
      thirdTitle: '',
      icon: <AiFillPhone size={16} color="white" />,
      description:
        'Reach out to us anytime for inquiries. We are just a call away!',
    },
    {
      title: 'EMAIL US',
      secondTitle: 'info@furnituredesign.com',
      icon: <AiFillMail size={16} color="white" />,
      description:
        'Send us your questions, feedback, or collaboration requests.',
    },
    {
      title: 'VISIT US',
      secondTitle:
        '3rd floor, Denbel Building',
      thirdTitle: '',
      icon: <ImLocation size={16} color="white" />,
      description:
        'Stop by our shop to explore our collections',
    },
  ];

  return (
    <div className="flex flex-col w-full lg:w-[60%] h-full px-5 lg:px-16 pt-5">
      <h1 className="text-black font-bold text-left md:tracking-wider mb-2 text-2xl lg:text-3xl">
        Contact Information
      </h1>
      <p className="text-black font-semibold text-left md:tracking-wider mb-2 text-sm lg:text-md">
        {`your shipments, sourcing, and logistics run smoothly. From 
          customs regulations to supply chain coordination, we’re with you every step of the way. 
          Reach out today and let’s build a reliable partnership that grows with your business.`}
      </p>
      <div className="flex flex-col lg:flex-row h-full w-full">
        {ServicesArray.map((service, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col lg:pr-5 text-black mb-5`}
            >
              <div className="flex flex-col w-full">
                <div className={`${index %  2 == 0 ? "bg-[#c74c4a]" : "bg-black"} mb-2 w-1/4 flex justify-center items-center w-12 h-12 border rounded-full `}>
                  <p className="">{service.icon}</p>
                </div>
                <h2 className="md:text-md text-sm font-semibold lg:text-left mb-2 w-full">
                  {service.secondTitle}
                </h2>

                <p className="lg:text-left lg:text-md md:text-sm w-3/4">
                  {service.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
