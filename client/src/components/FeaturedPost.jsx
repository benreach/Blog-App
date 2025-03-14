import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

function FeaturedPost() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image src={"featured1.jpeg"} className={"rounded-3xl object-cover"} />
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to={"/"} className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <Link className="text-xl lg:text-3xl font-semibold lg:font-bold">
          Next, learn how to access this data and use it in your application,
          customize the{" "}
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4 ">
          <div className="w-1/3 apsect-video">
            <Image
              src={"featured2.jpeg"}
              className={"rounded-3xl object-cover aspect-video w-full h-full"}
              w={298}
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">01.</h1>
              <Link to={"/"} className="text-blue-800 lg:text-lg">
                Web Design
              </Link>
              <span>2 days ago</span>
            </div>
            <Link className="text-base sm:text-lg md:text-2xl lg:text-xl">
              Clerk handles authentication
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4 ">
          <div className="w-1/3 apsect-video">
            <Image
              src={"featured3.jpeg"}
              className={"rounded-3xl object-cover aspect-video w-full h-full"}
              w={298}
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">01.</h1>
              <Link to={"/"} className="text-blue-800 lg:text-lg">
                Web Design
              </Link>
              <span>2 days ago</span>
            </div>
            <Link className="text-base sm:text-lg md:text-2xl lg:text-xl">
              Clerk handles authentication
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4 ">
          <div className="w-1/3 apsect-video">
            <Image
              src={"featured4.jpeg"}
              className={"rounded-3xl object-cover aspect-video w-full h-full"}
              w={298}
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">01.</h1>
              <Link to={"/"} className="text-blue-800 lg:text-lg">
                Web Design
              </Link>
              <span>2 days ago</span>
            </div>
            <Link className="text-base sm:text-lg md:text-2xl lg:text-xl">
              Clerk handles authentication
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
