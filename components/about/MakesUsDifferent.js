import Image from "next/image";
import AboutMissionOne from "../../public/about_page/what makes us different.jpg";
import { FaHandsHelping, FaClipboardCheck, FaGlobe, FaShieldAlt, FaLightbulb } from "react-icons/fa";

export const MakesUsDifferent = () => {
  const whatMakesUsDifferent = [
    {
      title: "Personalized Solutions",
      description:
        "We understand your specific import/export needs and offer customized logistics and sourcing strategies.",
      icon:  <FaHandsHelping size={24} color="#c74c4a" />,
    },
    {
      title: "Attention to Detail",
      description:
        "From paperwork to packaging, we ensure precision and care at every stage of the trade process.",
      icon:  <FaClipboardCheck size={24} color="#c74c4a" />,
    },
    {
      title: "Global Expertise",
      description:
        "Years of international trade experience help us navigate customs, compliance, and global supply chains effectively.",
      icon:  <FaGlobe size={24} color="#c74c4a" />,
    },
    {
      title: "Reliable & Secure",
      description:
        "We prioritize secure transactions, reliable timelines, and trusted partnerships.",
      icon:  <FaShieldAlt size={24} color="#c74c4a" />,
    },
    {
      title: "Innovative Thinking",
      description:
        "We explore new strategies and emerging markets to add value and keep your business ahead.",
      icon:  <FaLightbulb size={24} color="#c74c4a" />,
    },
  ];

  return (
    <section className=" md:py-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 lg:px-10">
      <div className="w-full h-96 md:h-[600px] relative mb-5">
        <Image
          className=""
          alt="why choose us image"
          src={AboutMissionOne}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col text-black justify-center px-2 lg:px-5">
        <h1 className="text-xl md:text-3xl font-bold mb-5 text-center">
          What Makes Us Different
        </h1>
        <h2 className=" font-bold text-lg md:text-xl mb-5 text-left text-center">
          Our core values drive everything we do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          { whatMakesUsDifferent.map((data,index)=>(
            <div className="flex flex-col">
              <p className="mb-2">{data.icon}</p>
              <div className="">
                <span className="mb-2 md:text-lg text-md text-left font-bold">{data.title}</span> 
                <p className="mb-2 md:text-md text-sm text-left">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};