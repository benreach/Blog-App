import React, { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

function PostListPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-xl">Development Blog</h1>
      <button
        onClick={(prev) => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div>
          <PostList />
        </div>
        <div className={ `${open ? "block":"hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default PostListPage;
