import React from 'react';
import { useRouter } from 'next/router';

export const TopPosts = ({ all_top_rated_blog }) => {
  const router = useRouter();
  const handleSeeBlog = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="flex flex-col w-full bg-[#e6e6e6]">
      <h1 className="text-2xl lg:text-3xl font-extrabold text-[#000] tracking-wide leading-snug group-hover:text-white px-4 mt-5">
        Top Posts
      </h1>

      {all_top_rated_blog.map((blog, index) => (
        <button
          onClick={() => handleSeeBlog(blog.slug)}
          key={index}
          className="relative w-full flex group hover:bg-white px-4 py-5"
        >
          <h1 className="pr-5 text-2xl lg:text-4xl font-extrabold text-[#000] tracking-wide leading-snug group-hover:text-[#165248]">
            {index + 1}
          </h1>

          <div className="group-hover:text-[#165248]">
            <h3 
              className="text-md lg:text-lg font-bold text-[#000] text-left tracking-wide leading-snug group-hover:text-[#165248]"
              dangerouslySetInnerHTML={{ __html: blog.title }} 
            />
            <div className="flex justify-between items-center pt-2">
              <h3 className="font-normal text-sm md:text-md mb-5 lg:mb-0">
                {blog.category}
              </h3>

              <h3 className="font-normal text-sm md:text-md mb-5 lg:mb-0">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </h3>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
