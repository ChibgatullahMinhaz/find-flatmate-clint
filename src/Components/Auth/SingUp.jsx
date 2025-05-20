import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/Context/AuthContext";
const SingUp = () => {
    const {user} = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    console.log("google sign in");
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, photo, email, password } = Object.fromEntries(formData);
    console.log(name, photo, email, password);

    if (email === "" || password === "") {
      toast.error("Email and password are required");
      return;
    }
    if (!/\d/.test(password)) {
      toast.error("Password must include at least one digit (0-9)");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one lowercase letter (a-z)");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter (A-Z)");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    

  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true, amount: 0.0 }}
      className="w-full max-w-md mx-auto p-8 my-5 space-y-3 rounded-xl"
    >
      <h1 className="text-2xl font-bold text-center">Create Account</h1>
      <h1 className="text-sm font-semibold text-center">enjoy your life</h1>
      <form onSubmit={handleSignUp} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block ">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photo" className="block ">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            autoComplete="photo"
            defaultValue={"https://your photo url"}
            placeholder="Enter your photo url"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block ">
            Email
          </label>
          <input
            required
            type="text"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className="w-full px-4 py-3 rounded-md bg-gray-50 dark:text-black"
          />
          <div className="flex justify-end text-xs ">
            <Link rel="noopener noreferrer" to="#">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 cursor-pointer bg-[var(--btn-primary)]">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm ">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogleSignIn}
          aria-label="Log in with Google"
          className="p-3 cursor-pointer rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="/Login"
          className="underline text-blue-500"
        >
          Login
        </Link>
      </p>
    </motion.div>
  );
};

export default SingUp;
