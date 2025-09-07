import Image from "next/image";
import { FaHandshake, FaClock, FaCheckCircle, FaGlobe, FaHeadset, FaChartLine } from "react-icons/fa"
;
export const OurPromise = () => {
  const promises = [
    {
      title: "Integrity in Every Deal",
      description: "We uphold transparency and honesty in all of our business relationships.",
      icon: <FaHandshake size={32} color="#fff" />,
    },
    {
      title: "Timely & Efficient Service",
      description: "Your time matters — we ensure that your goods move quickly and smoothly.",
      icon: <FaClock size={32} color="#fff" />,
    },
    {
      title: "Focus on Quality",
      description: "We handle all products with care and attention to detail.",
      icon: <FaCheckCircle size={32} color="#fff" />,
    },
    {
      title: "Global Connections, Local Insight",
      description: "Our network spans continents, but we never lose sight of local needs.",
      icon: <FaGlobe size={32} color="#fff" />,
    },
    {
      title: "Reliable Support",
      description: "We’re here for you every step of the way before, during, and after delivery.",
      icon: <FaHeadset size={32} color="#fff" />,
    },
    {
      title: "Continuous Growth",
      description: "We constantly adapt and innovate to serve you better.",
      icon: <FaChartLine size={32} color="#fff" />,
    },
  ];

  return (
    <section className="bg-white flex flex-col py-20 px-5 lg:px-20">
      <div className="flex flex-col lg:flex-row">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-left w-full lg:w-1/2">
          Driven by Trust, <span className="text-[#c74c49]">Delivered with Excellence</span>
        </h2>
        <p className="text-base md:text-lg paragraph-fonts md:px-10 text-center text-justify w-full lg:w-1/2">
          {`Our promise is built on a foundation of trust, dedication, and unwavering commitment 
          to excellence. As a company engaged in global import and export, we understand the importance of reliability, 
          transparency, and long-term relationships.`}
        </p>
        <p className="text-base md:text-lg paragraph-fonts md:px-10 text-center text-justify w-full lg:w-1/2">
          {`Our mission goes beyond moving products across borders — we aim to create smooth, secure, and successful trade 
          experiences that empower our clients to grow and thrive in today’s competitive marketplace.`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {promises.map((item, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center bg-[#f1f1f1] border border-transparent rounded-xl py-3 px-4 text-center font-bold"
            >
              <div className={`${index %  2 == 0 ? "bg-[#c74c4a]" : "bg-black"} w-1/4 flex justify-center items-center w-16 h-16 border rounded-full `}>
                <p className="">{item.icon}</p>
              </div>
              <div className="flex flex-col w-3/4">
                <h3 className="text-md lg:text-lg font-bold mb-5 text-black text-right">{item.title}</h3>
                <p className="text-black text-right text-sm lg:text-md font-normal">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
