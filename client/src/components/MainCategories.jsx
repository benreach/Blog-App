import React from "react";
import { Link } from "react-router-dom";

function MainCategories() {
  return (
    <div className="hidden md:flex text-sm bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to={"/posts"}
          className="bg-blue-800 text-white rounded-full px-2 lg:px-4 py-2"
        >
          All posts
        </Link>
        <Link
          to={"/posts?cat=web-design"}
          className="hover:bg-blue-400 text-black rounded-full px-2 lg:px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to={"/posts?cat=development"}
          className="hover:bg-blue-400 text-black rounded-full px-2 lg:px-4 py-2"
        >
          Development
        </Link>
        <Link
          to={"/posts?cat=seo"}
          className="hover:bg-blue-400 text-black rounded-full px-2 lg:px-4 py-2"
        >
          SEO
        </Link>
        <Link
          to={"/posts?cat=marketing"}
          className="hover:bg-blue-400 text-black rounded-full px-2 lg:px-4 py-2"
        >
          Martketing
        </Link>
        <Link
          to={"/posts?cat=database"}
          className="hover:bg-blue-400 text-black rounded-full px-2 lg:px-4 py-2"
        >
          Database
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      <div className="bg-gray-[150] rounded-full flex items-center gap-2 py-2 px-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search a post..."
          className="outline-none bg-transparent border-none"
        />
      </div>
    </div>
  );
}

export default MainCategories;
