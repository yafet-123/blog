import Image from "next/image";
import AboutMissionOne from "../../public/about_page/values.jpg";
import { FaGlobe, FaHandshake, FaTruck, FaShieldAlt, FaCogs, FaHeadset } from "react-icons/fa";

export const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      id: 1,
      title: "Global Reach",
      description: "We operate across continents and regions.",
      icon: <FaGlobe size={24} color="#c74c4a" />,
    },
    {
      id: 2,
      title: "Reliable Partners",
      description: "Strong network of trusted suppliers and clients.",
      icon: <FaHandshake size={24} color="#c74c4a" />,
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Speedy shipping and customs processing.",
      icon: <FaTruck size={24} color="#c74c4a" />,
    },
    {
      id: 4,
      title: "Secure Handling",
      description: "We ensure goods are delivered safely.",
      icon: <FaShieldAlt size={24} color="#c74c4a" />,
    },
    {
      id: 5,
      title: "Custom Solutions",
      description: "Flexible options tailored to your needs.",
      icon: <FaCogs size={24} color="#c74c4a" />,
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Customer service available anytime.",
      icon: <FaHeadset size={24} color="#c74c4a" />,
    },
  ];


  return (
    <section className="bg-[#edf2f5] grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-full relative">
        <Image
          className=""
          alt="why choose us image"
          src={AboutMissionOne}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col text-black justify-center text-center px-5 py-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
        <h2 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mb-4 text-left">
          Our core values drive everything we do
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          { whyChooseUs.map((data,index)=>(
            <div className="flex items-center">
              <p>{data.icon}</p>
              <div className="md:text-lg text-md text-left px-5">
                <span className="font-bold">{data.title}</span> 
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};