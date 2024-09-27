import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlogs";
import FullBlog from "../components/FullBlog";
import BlogSkeleton from "../components/BlogSkeleton";

function Blog() {
  const { id } = useParams<string>();
  const { loading, blog } = useBlog({ id: id || "" });

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

  if (!blog) {
    return <div className="flex justify-center">Blog not found</div>;
  }

  return <FullBlog blog={blog} />;
}

export default Blog;
