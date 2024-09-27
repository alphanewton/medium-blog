import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "medium-common-bynewton";
import axios from "axios";
import { BACKEND_URL } from "../config";

function AuthForm({ type }: { type: "signin" | "signup" }) {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("jwt", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("Error: " + e);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center w-screen lg:w-full">
        <div className="">
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              {type === "signin" ? "Login now!" : "Create an account"}
            </div>
            <div className="text-slate-400">
              {type === "signin"
                ? "Already have an account?"
                : "Create an account"}
              <Link
                to={type === "signin" ? "/signup" : "/signin"}
                className="pl-2 underline"
              >
                {type === "signin" ? "Signup" : "Signin"}
              </Link>
            </div>
          </div>
          <div className="pb-8">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Newton Narzary..."
                onChange={(e) => {
                  setPostInputs({ ...postInputs, name: e.target.value });
                }}
              />
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="newton@gmail.com"
              onChange={(e) => {
                setPostInputs({ ...postInputs, email: e.target.value });
              }}
            />
            <LabelledInput
              label="Password"
              placeholder="123456"
              type="password"
              onChange={(e) => {
                setPostInputs({ ...postInputs, password: e.target.value });
              }}
            />
          </div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
            onClick={sendRequest}
          >
            {type === "signin" ? "Signin" : "Signup"}
          </button>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="pt-3">
      <label className="block mb-2 text-sm font-semibold text-black">
        {label}
      </label>
      <input
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default AuthForm;
