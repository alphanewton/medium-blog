import Appbar from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs, Blog } from "../hooks/useBlogs";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <div className="space-y-5">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="  max-w-xl">
          {(blogs || []).map((blog: Blog) => (
            <BlogCard
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate="27th Sep 2024"
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
