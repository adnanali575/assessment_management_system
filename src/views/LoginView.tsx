import { Link } from "react-router-dom";
import BaseButton from "../components/BaseButton";
import { BaseInput } from "../components/BaseInput";

const LoginView = () => {
  const logIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="px-4 flex justify-center items-center min-h-screen bg-gray-50 w-screen">
      <div className="w-[400px] flex flex-col items-center bg-white shadow-md p-8 rounded-md">
        <div className=" flex justify-center bg-white shadow-md p-3 rounded-full mt-[-72px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/dc/KIU-Logo.jpg"
            className="h-[60px] rounded-full"
          />
        </div>
        <form onSubmit={logIn} className="w-full space-y-3">
          <p className="text-center text-2xl font-bold text-blue-700 pt-4">
            Log in
          </p>
          <BaseInput label="Email" name="email" onChange={() => {}} />
          <BaseInput label="Password" name="passwrod" onChange={() => {}} />
          <div className="pt-2 space-y-4">
            <BaseButton title="Sign in" className="w-full" />
            <Link
              to="/"
              className="w-full block text-center bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded active:scale-95"
            >
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
