import Hero from '../../../components/blog/Hero';
import { Blogs } from '../../../components/blog/Blogs';
import { BlogCategories } from '../../../components/blog/BlogCategories';
import { MainHeader } from '../../../components/shared/MainHeader';
import axios from 'axios';

import heroImage1 from '../../../public/hero/blog/hero (1).jpg';
import heroImage2 from '../../../public/hero/blog/hero (2).jpg';
import heroImage3 from '../../../public/hero/blog/hero (3).jpg';
import heroImage4 from '../../../public/hero/blog/hero (4).jpg';

export default function BlogCategory({ blog, categories, topRatedPosts, categoryName }) {
  const HeroImages = [
    { id: 1, image: heroImage1 },
    { id: 2, image: heroImage2 },
    { id: 3, image: heroImage3 },
    { id: 4, image: heroImage4 },
  ];
  console.log("Props inside BlogCategory:", blog, categories, topRatedPosts, categoryName);
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader
        title={`Eco Travel Ethiopia : ${categoryName} Blogs`}
      />
      <div className="bg-[#dedee0]">
        <Hero
          title={`Explore ${categoryName} Blogs`}
          description={`Discover posts in the ${categoryName} category.`}
          HeroImages={HeroImages}
        />

        <div className="flex flex-col lg:flex-row px-5 lg:px-10 bg-white py-5">
          <div className="lg:w-[30%]">
            <BlogCategories all_top_rated_blog={topRatedPosts} categories={categories} />
          </div>
          <div className="lg:w-[70%]">
            <Blogs posts={blog} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { categoryName } = context.params;
  const site = 'hulu12com.wordpress.com';
  const postsUrl = `https://public-api.wordpress.com/wp/v2/sites/${site}/posts`;
  const categoriesUrl = `https://public-api.wordpress.com/wp/v2/sites/${site}/categories`;

  try {
    const categoryResponse = await axios.get(categoriesUrl);
    const categories = categoryResponse.data.map(cat => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      count: cat.count,
    }));

    const selectedCategory = categories.find(cat => cat.slug === categoryName);
    if (!selectedCategory) {
      return { notFound: true };
    }

    // Fetch only posts that belong to this category
    const { data: postsByCategory } = await axios.get(postsUrl, {
      params: { categories: selectedCategory.id, per_page: 20 }, // WordPress API handles the filter
    });

    // Normalize posts
    console.log(postsByCategory)
    const blog = postsByCategory.map(post => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      featured_media: post.jetpack_featured_media_url,
      link: post.link,
      date: post.date,
      slug: post.slug,
      category: categoryName,
    }));

   
    const { data: allPosts } = await axios.get(postsUrl, { params: { per_page: 50 } });

    const normalizedPosts = allPosts.map(post => {
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
    const topRatedPosts = normalizedPosts
      .sort((a, b) => b.comment_count - a.comment_count)
      .slice(0, 7);

    return {
      props: {
        blog,
        categories,
        categoryName,
        topRatedPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching category posts:", error.message);
    return {
      props: {
        blog: [],
        categories: [],
        categoryName,
        topRatedPosts: [],
      },
    };
  }
}
