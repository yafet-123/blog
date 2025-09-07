import React from 'react';
import Image from 'next/image';
import { BlogObject } from '../../types/types';

interface AboutBlogsProps {
  blog: BlogObject[];
}
export const AboutTheBlog: React.FC<AboutBlogsProps> = ({ blog }) => {
  return (
    <section className="flex flex-col w-full">
      <div className="w-full text-[#165248] bg-opacity-90 md:mb-8 mb-4">
        <h1 className="text-center font-bold md:text-5xl text-2xl mb-10">
          {blog.title}
        </h1>

        <div className="w-full h-[300px] lg:h-[450px] relative mb-5">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="flex justify-between items-center text-[#000]">
          <h3 className="font-semibold text-md md:text-lg mb-5 lg:mb-0">
            {blog.category}
          </h3>

          <h3 className="font-semibold text-md md:text-lg mb-5 lg:mb-0">
            {blog.date}
          </h3>
        </div>

        <div>
          {blog.longDescription.map((blog, index) => (
            <p
              key={index}
              className="text-[#000] text-left text-lg md:text-xl bg-opacity-30 mb-5"
            >
              {blog}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
