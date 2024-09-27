import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

function Appbar() {
  return (
    <div className="border-b border-stone-400 flex justify-between px-10 py-4 items-center">
      <Link to={"/blogs"}>
        <div className="flex flex-col justify-center text-2xl cursor-pointer">
          Medium
        </div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-8"
          >
            Publish
          </button>
        </Link>

        <Avatar name="Newton " size={"big"} />
      </div>
    </div>
  );
}

export default Appbar;
