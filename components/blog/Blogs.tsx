import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BlogObject } from '../../types/types';

interface BlogsProps {
  all_blogs: BlogObject[];
}

export const Blogs: React.FC<BlogsProps> = ({ all_blogs }) => {
  const router = useRouter();

  const handleSeeBlog = (blogid: String) => {
    router.push(`/blog/${blogid}`);
  };

  const motionConfig = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 1 },
  };

  return (
    <div className="flex flex-col justify-center items-center lg:pl-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 pb-10">
        {all_blogs?.map((blog: any, index: any) => {
          return (
            <motion.div
              key={index}
              className={`relative flex flex-col bg-[#E6E6E6] group hover:bg-primaryColor`}
              {...motionConfig}
            >
              <div className="w-full h-72 md:h-[300px] relative mb-5">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col px-4 group-hover:text-white">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-md md:text-lg mb-5">
                    {blog.category}
                  </h3>

                  <h3 className="font-semibold text-md md:text-lg mb-5">
                    {blog.date}
                  </h3>
                </div>
                <h1 className="font-bold text-xl md:text-2xl mb-5 group-hover:text-white">
                  {blog.title}
                </h1>
                <p className="font-normal text-md md:text-xl text-justify mb-5">
                  {blog.shortDescription}
                </p>

                <button onClick={() => handleSeeBlog(blog.id)}>
                  <h5
                    className={`font-bold font-monospace group-hover:border-black text-xl bg-primaryColor rounded-lg mb-5
                    group-hover:bg-secondaryColor mt-1 w-40 items-center justify-center hover:scale-105 transition duration-400 p-2 text-white`}
                  >
                    Read MORE
                  </h5>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
