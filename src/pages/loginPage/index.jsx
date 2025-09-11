import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";

export default function LoginPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 animate__animated animate__slideInDown">
          Welcome Back 👋
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input type="password" placeholder="Enter your password" />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <Button label={"Login"}/>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
