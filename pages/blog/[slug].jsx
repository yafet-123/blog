import { MainHeader } from '../../components/shared/MainHeader';
import { AboutTheBlog } from '../../components/blog/AboutTheBlog';
import { TopPosts } from '../../components/blog/TopPosts';
import { DisplayRecentBlog } from '../../components/blog/DisplayRecentBlog';
import axios from "axios"

export default function BlogDetail({ blog, all_blogs, topRatedPosts,}) {
  console.log(blog)
  return (
    <div className="antialiased bg-gradient-to-r">
      <MainHeader
        title={`Eco Travel Ethiopia Tours and Car Rental`}
      />
      <div className="flex flex-col-reverse lg:flex-row w-full h-full px-5 lg:px-20 pt-24">
        <div className="lg:w-[30%] lg:pr-5">
          <TopPosts all_top_rated_blog={topRatedPosts} />
        </div>
        <div className="lg:w-[70%] lg:pl-5">
          <AboutTheBlog blog={blog} />
        </div>
      </div>
      
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params; // blog slug from URL
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

    // Fetch the specific blog by slug
    const { data: blogArray } = await axios.get(postsUrl, {
      params: { slug },
    });

    if (blogArray.length === 0) return { notFound: true };

    const post = blogArray[0];
    const blog = {
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      featured_media: post.jetpack_featured_media_url,
      link: post.link,
      date: post.date,
      categories: post.categories, // IDs of categories
    };

    const response = await axios.get(postsUrl);
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
        blog,
        categories,
        topRatedPosts,
      },
    };
  } catch (error) {
    console.error('Error fetching blog:', error.message);
    return {
      props: {
        blog: null,
        categories: [],
        topRatedPosts: [],
      },
    };
  }
}
