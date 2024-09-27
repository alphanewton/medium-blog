import AuthForm from "../components/AuthForm";
import Quote from "../components/Quote";

function Signin() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <AuthForm type={"signin"} />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}

export default Signin;
