import Image from 'next/image'
import Link from "next/link";

export function WhyChooseUs () { 
  const WhyChooseUsSection =[
    {
      "header":`Global Expertise`,
      "descreption":`With years of experience in international markets, we understand the complexities 
      of global trade regulations, logistics, and compliance — ensuring smooth and secure operations from origin to destination.`
    },
    {
      "header":`Reliable Logistics Network`,
      "descreption":`Our well-established logistics infrastructure and partnerships guarantee 
      timely deliveries and reduced risks, helping you meet deadlines and maintain customer satisfaction across continents.`
    },
    {
      "header":`Quality Assurance`,
      "descreption":`We work only with verified suppliers and buyers, performing stringent quality checks at 
      every stage to ensure the products you import or export meet the highest industry standards.`
    },
    {
      "header":`Personalized Solutions`,
      "descreption":`No two businesses are the same. We provide tailored import/export strategies 
      that align with your goals, product type, and market demands — maximizing your growth and minimizing hassle.`
    },
  ]
  return(
    <section className="relative flex flex-col pt-20 pb-40 px-5 lg:px-16 bg-white">
      <div className="flex flex-col lg:flex-row w-full mb-10 lg:mb-0 px-2 w-full">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-left">
          Why Choose <span className="text-[#c74c49]">Us</span>
        </h2>

        <div className="w-full lg:w-3/4 h-64 relative">
          <Image
            src="/home_page/why choose us.jpg" 
            alt="why choose us"
            layout="fill"
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>

      <p className="text-base md:text-lg paragraph-fonts text-center text-justify w-full my-10">
        {`We’re not just here to offer a service. we’re here to be a dependable part of your journey. Whether you're starting 
        something new or scaling something great, our commitment is to provide value that lasts. We focus on understanding 
        your needs, delivering consistent support, and building a relationship founded on trust, quality, and long-term 
        success. With every step forward, we aim to create impact, solve real challenges, and help you move with confidence 
        toward your goals.`}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        { WhyChooseUsSection.map((data,index)=>(
          <div key={index} className="md:text-xl text-lg text-left">
            <h1 className="text-lg md:text-xl font-bold mb-4 text-left">
              {data.header}
            </h1> 
            <p className="text-base md:text-lg paragraph-fonts text-left w-full lg:w-3/4">
              {data.descreption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
};