import Appbar from "./Appbar";
import { Blog } from "../hooks/useBlogs";
import { Avatar } from "./BlogCard";
import { useNavigate } from "react-router-dom";

function FullBlog({ blog }: { blog: Blog }) {
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl pt-10">
        <div className="col-span-9 ">
          <div className="text-5xl font-extrabold">{blog.title}</div>
          <div className="text-sm text-slate-500 pt-2">
            Posted on 27th Sep 2024
          </div>
          <div className="pt-4">{blog.content}</div>
        </div>
        <div className="col-span-3 ">
          <div className="text-slate-500">Author</div>

          <div className="flex w-full">
            <div className="pr-4 flex flex-col justify-center">
              <Avatar name={blog.author.name} size="big" />
            </div>
            <div>
              <div className="text-xl font-bold">{blog.author.name}</div>
              <div className="pt-2 text-slate-500">
                Something random about the author to catch your attention...
              </div>
            </div>
          </div>

          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
            onClick={() => navigate(`/edit/${blog.id}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;
