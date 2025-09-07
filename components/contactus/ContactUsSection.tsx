import React from 'react';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

interface Service {
  title: string;
  secondTitle: string;
  thirdTitle?: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

export const ContactUsSeciton: React.FC = () => {
  const ServicesArray: Service[] = [
    {
      title: 'CALL US',
      secondTitle: '+251934781038',
      thirdTitle: '',
      icon: <AiFillPhone size={75} color="white" />,
      description:
        'Reach out to us anytime for inquiries, support, or assistance. We are just a call away!',
      color: 'bg-[#12423F]',
    },
    {
      title: 'EMAIL US',
      secondTitle: 'info@furnituredesign.com',
      thirdTitle: 'info.furnituredesign123@gmail.com',
      icon: <AiFillMail size={75} color="white" />,
      description:
        'Send us your questions, feedback, or collaboration requests. We’ll get back to you promptly.',
      color: 'bg-[#1A654F]',
    },
    {
      title: 'VISIT US',
      secondTitle:
        '3rd floor, Denbel Building, Bole Denbel, Addis Ababa, Ethiopia.',
      thirdTitle: '',
      icon: <ImLocation size={75} color="white" />,
      description:
        'Stop by our studio to explore our collections, discuss your design needs, or learn more about how we can transform your space.',
      color: 'bg-[#197E52]',
    },
  ];

  return (
    <div className="flex flex-col my-10 px-5 lg:px-10">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-4">
        {ServicesArray.map((service, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-center items-center w-auto rounded-md h-auto px-5 py-5 lg:py-10 gap-6 ${service.color}
               text-white hover:bg-emerald-700 hover:scale-110 transition duration-500`}
            >
              <div className="flex flex-col justify-center items-center w-full">
                <p className="py-5">{service.icon}</p>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="md:text-xl text-lg font-semibold text-center">
                    {service.secondTitle}
                  </h2>
                  <h2 className="md:text-xl text-lg font-semibold text-center">
                    {service.thirdTitle}
                  </h2>
                </div>
              </div>

              <p className="text-center lg:text-lg md:text-sm sm:text-lg lg:px-6 ">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
