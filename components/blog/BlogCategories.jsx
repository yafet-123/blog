import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TopPosts } from './TopPosts';
import { StaticImageData } from 'next/image';


export const BlogCategories = ({ all_top_rated_blog, categories }) => {
  const router = useRouter();

  const handleSeeCategory = (categoryName) => {
    router.push(`/blog/category/${categoryName}`);
  };

  // Function to generate a random color (not too light)
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 150) + 50; // 50-200
    const g = Math.floor(Math.random() * 150) + 50;
    const b = Math.floor(Math.random() * 150) + 50;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="lg:sticky top-0 bottom-10 flex flex-col w-full">
      <div className="grid grid-cols-2 gap-5">
        {categories.map((category, index) => {
          const bgColor = getRandomColor();

          return (
            <button
              onClick={() => handleSeeCategory(category.slug)}
              key={index}
              className="flex justify-center items-center w-full h-20 mb-4 group"
              style={{ backgroundColor: bgColor }}
            >
              <h1 className="text-lg lg:text-xl font-extrabold text-white tracking-wide leading-snug group-hover:text-[#165248]">
                {category.name}
              </h1>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <TopPosts all_top_rated_blog={all_top_rated_blog} />
      </div>
    </div>
  );
};
