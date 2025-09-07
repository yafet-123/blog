import Image from "next/image";
import Slider, { Settings, LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Team = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplaySpeed: 3000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const teamMembers = [
    {
      id: 1,
      name: "Abel Mekonnen",
      image: "/about_page/team1.jpg",
      position: "Managing Director",
      description: "Oversees overall operations and strategic planning of import and export activities.",
    },
    {
      id: 2,
      name: "Sofia Tadesse",
      image: "/about_page/team3.jpg",
      position: "International Trade Manager",
      description: "Handles global trade partnerships and ensures compliance with trade regulations.",
    },
    {
      id: 3,
      name: "Elias Habte",
      image: "/about_page/team2.jpg",
      position: "Shipping Coordinator",
      description: "Manages the transportation and shipment logistics for both imports and exports.",
    },
    {
      id: 4,
      name: "Martha Lemma",
      image: "/about_page/team4.jpg",
      position: "Procurement Specialist",
      description: "Sources and evaluates suppliers, ensuring quality and cost efficiency in imports.",
    },
    {
      id: 5,
      name: "Dawit Berhanu",
      image: "/about_page/team5.jpg",
      position: "Export Sales Executive",
      description: "Focuses on outbound sales and expanding the company’s reach into foreign markets.",
    },
    {
      id: 6,
      name: "Rahel Asfaw",
      image: "/about_page/team6.jpg",
      position: "Customs Clearance Officer",
      description: "Handles all customs documentation and ensures smooth clearance of goods at borders.",
    },
  ];


  return (
    <section className="">
      <div className="h-screen md:h-[800px] bg-[#f8f8f8] py-10 px-10">
        <div className="flex items-center justify-center mb-5">
          <h1 className="bg-[#c74c49] text-white border border-transparent rounded-xl py-2 text-center w-32 font-bold">
            Our Team
          </h1>
        </div>

        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center">
          Team <span className="text-[#c74c49]">Members</span>
        </h2>
        <p className="text-base md:text-xl mb-8 paragraph-fonts md:px-16 text-center">
          {`Behind every successful trade is a skilled and passionate team. Get to know 
          the professionals who drive our import and export operations with expertise, integrity, and global vision.`}
        </p>
        <div className="">
          <Slider {...settings}>
            {teamMembers.map((data, index) => (
              <div key={data.id} className="h-[22rem] pb-5 border-2 rounded-xl relative">
                <div className="w-full h-64 relative">
                  <Image
                    src={data.image}
                    alt="Team member image"
                    layout="fill"
                    className="object-cover rounded-md"
                    priority
                  />
                </div>
                <div className="py-2 bg-[#c74c49] text-white absolute bottom-5 border border-transparent rounded-xl w-[90%] mx-[5%]">
                  <h3 className="text-center mb-2 text-lg lg:text-xl font-bold">{data.name}</h3>
                  <h3 className="text-center mb-2 text-md lg:text-lg font-semibold">{data.position}</h3>
                  <p className="text-center mb-2 text-sm lg:text-md font-normal">{data.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
