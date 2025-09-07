import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link"

export default function Import({ all_imports }) {
  const router = useRouter();
  const handleDetailProject = (importId) => {
    router.push(`/service/display/import/${importId}`);
  };
  return (
    <div className="flex flex-col px-2 lg:px-5 py-10 bg-[#dedee0] lg:pt-72">
      <div className="flex flex-col lg:flex-row mb-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-left w-full lg:w-1/2 ">
          Bringing the <span className="text-[#c74c49]">World to Your Business</span>
        </h2>
        <p className="text-base md:text-xl paragraph-fonts text-left w-full lg:w-1/2">
          {`We help you source high-quality products from trusted international suppliers, managing every detail 
          from customs clearance to delivery — so you get what you need, when you need it, without the hassle.`}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {all_imports?.map((data, index) => {
          return (
            <div
              key={data.id}
              className={`relative flex flex-col ${
                data.id % 2 == 1 ? "bg-[#c74c49] text-white" : "bg-[#E6E6E6] text-black"
              }`}
            >
              <div className="w-full h-72 md:h-[250px] relative">
                <Image
                  src={data.image}
                  alt={data.name}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="flex flex-col px-4">
                <h1 className="font-bold text-xl md:text-3xl mt-5 mb-5">
                  {data.name}
                </h1>
                <p className="font-normal text-md md:text-lg text-justify">
                  {data.description}
                </p>

                <div className="my-5 bg-transparent">
                  <button onClick={() => handleDetailProject(data.id)}>
                    <h5
                      className={`font-bold font-monospace hover:border-black text-md mt-1 w-32 items-center justify-center 
                      hover:scale-105 transition duration-400 p-2 text-white ${
                        data.id % 2 == 1
                          ? "bg-gradient-to-r from-red-500 to-[#c74c49]-500"
                          : "bg-gradient-to-r from-red-800 to-[#c74c49]-800"
                      }`}
                    >
                      View More
                    </h5>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
