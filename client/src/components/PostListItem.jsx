import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src={"/postImg.jpeg"} className={"rounded-2xl object-cover"} w={895}/>
      </div>
      <div className="flex flex-col gap-4">
        <Link to={"/test"} className="text-4xl font-semibold ">
        'More a procession than a race' - when could Liverpool seal title?
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link to={"/"} className="text-blue-800">Reach</Link>
          <span>on</span>
          <Link to={"/"} className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Clerk handles authentication and user management for you. Next, learn
          how to access this data and use it in your application, customize the
          look and feel of your components, and get your Clerk app ready for
          production.
        </p>
        <Link className="text-blue-800">Read more!</Link>
      </div>
    </div>
  );
}

export default PostListItem;
