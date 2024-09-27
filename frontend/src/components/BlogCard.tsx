import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-2 w-screen max-w-screen-md">
        <div className="flex">
          <Avatar name={authorName} />
          <div className="font-extralight text-sm pl-2 flex flex-col justify-center">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-2">
            <div className="w-1 h-1 rounded-full bg-slate-300 " />
          </div>
          <div className="font-thin pl-2 text-slate-500 text-sm flex flex-col justify-center">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-light">{content.slice(0, 100)}...</div>
        <div className="text-slate-500 text-sm font-light pt-3">{`${Math.ceil(
          content.length / 100
        )} minute(s) read`}</div>
      </div>
    </Link>
  );
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
        size === "small" ? "h-6 w-6" : "h-10 w-10"
      }`}
    >
      <span
        className={`font-medium ${
          size === "small" ? "text-sm" : "text-lg"
        } text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
