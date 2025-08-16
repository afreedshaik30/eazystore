import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-10">
      <div className="text-center">
        <h1 className="mt-10 text-9xl font-extrabold text-gray-300 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
      <div className="mt-10">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Illustration"
          className="w-80 md:w-96 mx-auto"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
