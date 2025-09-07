import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const DisplayRecentBlog = ({ all_blogs }) => {
  const router = useRouter();
  const handleSeeblog = (slug) => {
    router.push(`/blog/${slug}`);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full shadow-sky-200">
      {all_blogs.map((blog, index) => (
        <button onClick={() => handleSeeblog(blog.slug)} key={index}>
          <div className="flex flex-col my-3 hover:bg-[#165248] group hover:rounded-lg bg-[#dddddf] border rounded-lg shadow-2xl">
            <div className="w-full !h-72 relative">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            <div className="w-full flex flex-col my-5 text-left px-5">
              <h1 className="mb-5 text-lg lg:text-xl font-extrabold dark:text-white text-black tracking-wide leading-snug group-hover:text-white">
                {blog.title}
              </h1>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
