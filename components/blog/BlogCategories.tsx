import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TopPosts } from './TopPosts';
import { StaticImageData } from 'next/image';
import { BlogObject } from '../../type/type';

interface BlogCategoryProps {
  id: number;
  name: string;
  image: StaticImageData;
}

interface TopRatedBlogs {
  all_top_rated_blog: BlogObject[];
}

export const BlogCategories: React.FC<TopRatedBlogs> = ({
  all_top_rated_blog,
}) => {
  const Categories: BlogCategoryProps[] = [
    {
      id: 'sustainable-travel-tips',
      name: 'Sustainable Travel & Tips',
      image: '/blog/category1.jpg',
    },
    {
      id: 'destinations-in-ethiopia',
      name: 'Destinations in Ethiopia',
      image: '/blog/category2.jpg',
    },
    {
      id: 'culture-experiences',
      name: 'Culture & Experiences',
      image: '/blog/category3.jpg',
    },
    {
      id: 'adventure-nature',
      name: 'Adventure & Nature',
      image: '/blog/category4.jpg',
    },
    {
      id: 'travel-stories-guides',
      name: 'Travel Stories & Guides',
      image: '/blog/category5.jpg',
    },
  ];
  const router = useRouter();
  const handleSeeCategory = (categoryName: string) => {
    router.push(`/blog/category/${categoryName}`);
  };

  return (
    <div className="lg:sticky top-0 bottom-10 flex flex-col w-full">
      <div className="flex flex-col">
        {Categories.map((category, index) => (
          <button
            onClick={() => handleSeeCategory(category.id)}
            key={index}
            className="relative w-full h-20 mb-4 hover:scale-105 group"
          >
            <Image
              src={category.image}
              alt={category.name}
              layout="fill"
              objectFit="cover"
              className="brightness-50"
              priority
            />

            <div className="absolute bottom-0 left-0 right-0 z-50 px-4 py-5 group-hover:bg-opacity-80 transition duration-300">
              <h1 className="text-lg lg:text-xl font-extrabold text-[#fff] tracking-wide leading-snug group-hover:text-[#165248]">
                {category.name}
              </h1>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-8">
        <TopPosts all_top_rated_blog={all_top_rated_blog} />
      </div>
    </div>
  );
};
