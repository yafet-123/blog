import { MainHeader } from "../components/common/MainHeader";
import Hero from "../components/home/Hero";
import Blog from "../components/home/Blog";
import axios from "axios"

import heroImage1 from '../public/hero/home/home (1).jpg';
import heroImage2 from '../public/hero/home/home (2).jpg';
import heroImage3 from '../public/hero/home/home (3).jpg';
import heroImage4 from '../public/hero/home/home (4).jpg';

export default function Home({latestPosts}) {
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
    <div className="">
      <MainHeader title="Explore Our Blog: Stories & Insights" />
      <div className="bg-[#dedee0] pt">
        <Hero
          title="Discover Stories, Ideas & Insights"
          description={`Our blog is more than just articles. it’s a collection of stories, experiences, and knowledge meant to 
          inform, inspire, and connect. From trending topics to timeless lessons, we share insights that encourage growth, 
          creativity, and discovery. Explore our latest posts and find something new to think about every time you visit.`}
          HeroImages={HeroImages}
          style="lg:flex-row"
        />
        <Blog posts={latestPosts} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const site = "hulu12com.wordpress.com";
    const apiUrl = `https://public-api.wordpress.com/wp/v2/sites/${site}/posts`;
    const categoriesUrl = `https://public-api.wordpress.com/wp/v2/sites/${site}/categories`;

    const response = await axios.get(apiUrl);

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

    console.log(posts)

    // latest 6 blogs sorted by date
    const latestPosts = posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);

    // top rated by comment_count
    const topRatedPosts = posts
      .sort((a, b) => b.comment_count - a.comment_count)
      .slice(0, 7);

    return {
      props: {
        posts,
        latestPosts,
        topRatedPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching WordPress posts:", error.message);
    return {
      props: {
        posts: [],
        latestPosts: [],
        topRatedPosts: [],
      },
    };
  }
};




