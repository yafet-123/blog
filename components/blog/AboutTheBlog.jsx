import React from 'react';
import Image from 'next/image';

export const AboutTheBlog = ({ blog }) => {
  return (
    <section className="flex flex-col w-full">
      <div className="w-full text-[#165248] bg-opacity-90 md:mb-8 mb-4">
        <h3 
          className="text-center font-bold md:text-5xl text-2xl mb-10"
          dangerouslySetInnerHTML={{ __html: blog.title }} 
        />
        
        <div className="w-full h-[300px] lg:h-[450px] relative mb-5">
          <Image
            src={blog.featured_media}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="flex justify-between items-center text-[#000]">
          

          <h3 className="font-semibold text-md md:text-lg mb-5 lg:mb-0">
            {new Date(blog.date).toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h3>
        </div>

        <p 
          className="text-[#000] text-left text-lg md:text-xl bg-opacity-30 mb-5"
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />

      </div>
    </section>
  );
};
