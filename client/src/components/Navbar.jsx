import React, { useEffect, useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { getToken } = useAuth();

  // useEffect(() => {
  //   getToken().then((token) => console.log(token));
  // }, []);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
        <Image src={`logo.png`} alt={"lamadev"} w={32} h={32} />
        <span>blog</span>
      </Link>
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl "
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "☰"}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-yellow-700 
                gap-10 text-white transition-all ease-in-out font-medium ${
                  open ? "-right-0" : "-right-[100%]"
                }`}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Trending</Link>
          <Link to={"/"}>Most Popular</Link>
          <SignedOut>
            <Link to={"/login"}>
              <button className="py-2 px-4 rounded-3xl bg-blue-700 text-white">
                Login
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Trending</Link>
        <Link to={"/"}>Most Popular</Link>
        <SignedOut>
          <Link to={"/login"}>
            <button className="py-2 px-4 rounded-3xl bg-blue-700 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
