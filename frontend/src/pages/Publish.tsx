import { useState } from "react";
import Appbar from "../components/Appbar";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />
      <div className="flex justify-center mt-10 w-screen">
        <div className="max-w-2xl w-full">
          {/* Title Input */}
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mb-6"
            placeholder="Enter the title of your blog..."
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
      </div>
      {/* Content Textarea */}
      <div className="flex justify-center">
        <div className="max-w-2xl w-full">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <textarea
              id="editor"
              className="block w-full px-4 py-3 text-lg text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your article here..."
              rows={10}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
      </div>
      {/* Publish Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg focus:ring-4 focus:ring-blue-300 hover:bg-blue-700"
          onClick={async () => {
            const response = await axios.post(
              `${BACKEND_URL}/api/v1/blog`,
              {
                title,
                content,
              },
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("jwt"),
                },
              }
            );

            navigate(`/blog/${response.data.id}`);
          }}
        >
          Publish Post
        </button>
      </div>
    </div>
  );
}

export default Publish;
