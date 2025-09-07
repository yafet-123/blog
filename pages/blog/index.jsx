import Hero from '../../components/blog/Hero';
import { Blogs } from '../../components/blog/Blogs';
import { BlogCategories } from '../../components/blog/BlogCategories';
import { MainHeader } from '../../components/shared/MainHeader';
import axios from "axios";

import heroImage1 from '../../public/hero/blog/hero (1).jpg';
import heroImage2 from '../../public/hero/blog/hero (2).jpg';
import heroImage3 from '../../public/hero/blog/hero (3).jpg';
import heroImage4 from '../../public/hero/blog/hero (4).jpg';

export default function ToursPage({ posts, topRatedPosts, categories}) {
  const HeroImages = [
    {
      id: 1,
      image: heroImage1,
    },
    {
      id: 2,
      image: heroImage2,
    },
    {
      id: 3,
      image: heroImage3,
    },
    {
      id: 4,
      image: heroImage4,
    },
  ];

  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader title="Eco Travel Ethiopia Tours and Car Rental : Blog" />
      <div className="bg-[#dedee0]">
        <Hero
          title="Your Guide to Responsible Travel in Ethiopia"
          description={`Discover articles, travel tips, and inspiring stories that help you explore Ethiopia 
          thoughtfully, sustainably, and authentically.`}
          style=""
          HeroImages={HeroImages}
        />
        <div className="flex flex-col lg:flex-row px-5 lg:px-10 bg-[#fff] py-5">
          <div className="lg:w-[30%]">
            <BlogCategories all_top_rated_blog={topRatedPosts} categories={categories} />
          </div>
          <div className="lg:w-[70%]">
            <Blogs posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}


export const getServerSideProps = async () => {
  try {
    const site = "hulu12com.wordpress.com";
    const apiUrl = `https://public-api.wordpress.com/wp/v2/sites/${site}/posts`;
    const categoriesUrl = `https://public-api.wordpress.com/wp/v2/sites/${site}/categories`;

    const categoryResponse = await axios.get(categoriesUrl);
    const response = await axios.get(apiUrl);

    const categories = categoryResponse.data.map(cat => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      link: cat.link,
      count: cat.count // number of posts in this category
    }));

    console.log(response)

    const posts = response.data.map(post => {
      // Extract category slug from class_list
      const categoryClass = post.class_list.find(cls => cls.startsWith("category-"));
      const category = categoryClass ? categoryClass.replace("category-", "") : null;

      return {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        excerpt: post.excerpt.rendered,
        featured_media: post.jetpack_featured_media_url,
        link: post.link,
        date: post.date,
        category
      };
    });

    const topRatedPosts = posts.sort((a, b) => b.comment_count - a.comment_count).slice(0, 7);

    return {
      props: {
        posts,
        categories,
        topRatedPosts

      },
    };
  } catch (error) {
    console.error("Error fetching WordPress posts:", error.message);
    return {
      props: {
        posts: [],
        categories: []
      },
    };
  }
};


