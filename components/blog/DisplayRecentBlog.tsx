import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BlogObject } from '../../types/types';

interface BlogsProps {
  all_blogs: BlogObject[];
}
export const DisplayRecentBlog: React.FC<BlogsProps> = ({ all_blogs }) => {
  const router = useRouter();
  const handleSeeblog = (blogID) => {
    router.push(`/blog/${blogID}`);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full shadow-sky-200">
      {all_blogs.map((blog, index) => (
        <button onClick={() => handleSeeblog(blog.id)} key={index}>
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
              <p className="font-normal text-md md:text-lg hover:text-white text-justify group-hover:text-white">
                {blog.shortDescription}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
