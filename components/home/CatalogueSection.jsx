import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PopularDestination() {
  const router = useRouter();
  const handleTrade = () => {
    router.push(`/service`);
  };
    const Import = [
        {
          id: 1,
          image: "/home_page/Health & Beauty Products.jpg",
          text: "Health & Beauty Products",
        },
        {
          id: 2,
          image: "/home_page/consumer_electronics.jpeg",
          text: "Consumer Electronics",
        },
        {
          id: 3,
          image: "/home_page/Industrial Machinery.jpg",
          text: "Industrial Machinery",
        },
        {
          id: 4,
          image: "/home_page/Household Goods.jpg",
          text: "Household Goods",
        },
    ];

    const Export = [
      {
        id: 1,
        image: "/home_page/Agricultural Products.jpg",
        text: "Agricultural Products",
      },
      {
        id: 2,
        image: "/home_page/Handicrafts & Cultural Goods.jpg",
        text: "Handicrafts & Cultural Goods",
      },
      {
        id: 3,
        image: "/home_page/Natural Resources.jpg",
        text: "Natural Resources",
      },
      {
        id: 4,
        image: "/home_page/Processed Food & Beverages.jpg",
        text: "Processed Food & Beverages",
      },
      {
        id: 5,
        image: "/home_page/Leather & Textile Goods.jpg",
        text: "Leather & Textile Goods",
      },
    ]
    return (
        <section className="flex flex-col px-5 lg:px-10 py-10 bg-[#dedee0] py-10">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 text-left w-full lg:w-1/2 ">
              Our <span className="text-[#c74c49]">Products</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 font-bold my-5">
                We deal in a wide range of high-quality products, ensuring reliable sourcing 
                and timely delivery across global markets.
            </p>
            <h1 className="text-3xl md:text-5xl text-[#106156] font-bold mb-5">
                Import
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 ">
                {Import.map((data, index) => (
                  <div
                    className={`relative border rounded-xl dark  ${
                      data.id == 1 ? "lg:row-span-2  " : ""
                    } ${data.id == 3 ? "lg:row-span-2  " : ""} `}
                    key={index}
                  >
                    <div className={`border rounded-xl h-[400px]`}>
                      <Image
                        alt="Product Image"
                        layout="fill"
                        src={data.image}
                        className="border rounded-xl"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60" />
                    <div className="absolute inset-0">
                      <div className="">
                        <h1 className="text-left font-semibold text-white text-lg lg:text-4xl p-3 lg:p-14">
                          {data.text}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <h1 className="text-3xl md:text-5xl text-[#106156] font-bold my-4">
                Export
            </h1>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 py-2 items-center">
                {Export.map((data, index) => (
                    <div
                        key={index}
                        className={`relative h-full border rounded-xl  
                            ${ data.id == 2 ? "lg:row-span-2  " : ""}  
                            ${ data.id == 7 ? "lg:col-span-2  " : ""}
                        `}
                    >
                        <div className={`border rounded-xl h-[350px] }`}>
                            <Image
                                alt="Product Image"
                                layout="fill"
                                src={data.image}
                                className="border rounded-xl bg-opacity-30"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60" />
                        <div className="absolute inset-0 bg-opacity-30">
                            <div className="">
                                <h1 className="text-left font-semibold text-white text-lg lg:text-4xl p-3 lg:p-14">
                                    {data.text}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
            <div className="flex items-center justify-center mt-10">
                <button
                    onClick={() => handleTrade()}
                    className="bg-[#c74c49] text-white border border-transparent rounded-xl py-2 px-5 text-center font-bold w-52"
                >
                    Trade Portfolio
                </button>
            </div>
        </section>
    );
}