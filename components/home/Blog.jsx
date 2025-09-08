import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Blog({posts}) {
  const router = useRouter();

  const handleDetailblog = (slug) => {
    router.push(`/blog/${slug}`);
  };

  const handleBlog = () => {
    router.push(`/blog`);
  };
  const whatmakes = [
    {
      id: "exploring-the-rock-hewn-churches-of-lalibela",
      tour: "Exploring the Rock Hewn Churches of Lalibela",
      image: "/blog/blog (1).jpg",
      description:
        `Lalibela is often called the “New Jerusalem” of Ethiopia. Famous for its remarkable rock-hewn churches carved entirely 
        out of stone.`,
    },
    {
      id: "the-timeless-beauty-of-the-simien-mountains",
      tour: "The Timeless Beauty of the Simien Mountains",
      image: "/blog/blog (2).jpg",
      description:
        `The Simien Mountains, often referred to as the “Roof of Africa,” are a hiker’s paradise. With dramatic cliffs, jagged 
        peaks, and vast plateaus.`,
    },
    {
      id: "discovering-the-ancient-city-of-axum",
      tour: "Discovering the Ancient City of Axum",
      image: "/blog/blog (3).jpg",
      description:
        `Axum is the cradle of Ethiopian civilization, once the capital of the mighty Aksumite Kingdom. Renowned for its 
        towering obelisks and ancient palaces.`,
    },
  ];

  return (
    <section className="flex flex-col bg-[#fff] py-10">
      <h1 className="font-caveat text-center font-bold text-[#1b3f59] text-3xl md:text-4xl lg:text-5xl mb-10">
        Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:mx-10 lg:mx-20">
        {posts.map((post, index) => (
          <div
            key={index}
            className="shadow-md shadow-black h-full flex flex-col bg-[#dddddf] rounded-tr-xl rounded-tl-xl z-10 w-full hover:scale-105 transition duration-300"
          >
            <div className="h-[300px] bg-black rounded-tr-xl rounded-tl-xl relative mb-5">
              <Image
                alt={post.title}
                layout="fill"
                src={post.featured_media}
                className="rounded-tr-xl rounded-tl-xl"
              />
            </div>
            <div className="flex flex-col">
              <h1 
                className="font-caveat mb-5 text-left px-3 font-bold text-xl md:text-2xl w-full "
                dangerouslySetInnerHTML={{ __html: post.title }} 
              />

              <p 
                className="font-cursive ml-3 md:text-lg text-md text-left mb-3" 
                dangerouslySetInnerHTML={{ __html: post.excerpt }} 
              />

              <div className="flex justify-center items-center">
                <button
                  onClick={() => handleDetailblog(post.slug)}
                  className={`font-caveat my-5 font-bold md:text-lg text-md py-1 md:py-2 px-5 bg-[#1b3f59] hover:bg-[#fff] 
                  text-white hover:text-[#1b3f59] border-2 border-white rounded-md`}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => handleBlog()}
          className={`my-5  mx-5 lg:mx-10 font-bold md:text-lg text-md py-1 md:py-2 px-5 bg-[#1b3f59] hover:bg-[#fff] 
          text-white hover:text-[#1b3f59] border-2 border-white rounded-md`}
        >
          Discover More
        </button>
      </div>
    </section>
  );
}
