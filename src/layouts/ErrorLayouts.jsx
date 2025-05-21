import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorLayouts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-9xl font-extrabold text-purple-600"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-2 text-gray-600"
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6"
      >
        <Link to="/">
          <button className="px-6  cursor-pointer py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-md">
            Go Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorLayouts;
