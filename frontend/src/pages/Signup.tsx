import Quote from "../components/Quote";
import AuthForm from "../components/AuthForm";

function Signup() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <AuthForm type={"signup"} />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
