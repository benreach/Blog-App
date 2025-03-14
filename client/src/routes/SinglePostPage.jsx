import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-6xl ">
            Liverpool's march to the Premier League title seems inevitable now -
            after they increased their lead at the top of the table to 13
            points.
          </h1>
          <div className="flex items-center gap-2">
            <span>Written by</span>
            <Link className="text-blue-800">Joe Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p>
            No team in English top-flight history, going all the way back to
            1888-89, have been this far clear at this stage of the season and
            not won the title. "It's becoming less of a title race and more of a
            procession isn't it?" said Match of the Day host Gary Lineker. The
            Reds have only lost once in the league all season - and beat
            Newcastle 2-0 on Wednesday.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src={"postImg.jpeg"} className={"rounded-3xl "} w={600} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Second-placed Arsenal have dropped points in each of their past two
            games - including their goalless draw with Nottingham Forest.
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term.
          </p>
          <p>
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term. Liverpool boss Arne Slot said: "It is
            still a long way to go, 10 games. In March we only play one Premier
            League game - so we are not focused on the long term.
          </p>
          <p>
            Second-placed Arsenal have dropped points in each of their past two
            games - including their goalless draw with Nottingham Forest.
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term.
          </p>
          <p>
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term. Liverpool boss Arne Slot said: "It is
            still a long way to go, 10 games. In March we only play one Premier
            League game - so we are not focused on the long term.
          </p>
          <p>
            Second-placed Arsenal have dropped points in each of their past two
            games - including their goalless draw with Nottingham Forest.
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term.
          </p>
          <p>
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term. Liverpool boss Arne Slot said: "It is
            still a long way to go, 10 games. In March we only play one Premier
            League game - so we are not focused on the long term.
          </p>
          <p>
            Second-placed Arsenal have dropped points in each of their past two
            games - including their goalless draw with Nottingham Forest.
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term.
          </p>
          <p>
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term. Liverpool boss Arne Slot said: "It is
            still a long way to go, 10 games. In March we only play one Premier
            League game - so we are not focused on the long term.
          </p>
          <p>
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term. Liverpool boss Arne Slot said: "It is
            still a long way to go, 10 games. In March we only play one Premier
            League game - so we are not focused on the long term.
          </p>
          <p>
            Second-placed Arsenal have dropped points in each of their past two
            games - including their goalless draw with Nottingham Forest.
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term.
          </p>
          <p>
            Liverpool boss Arne Slot said: "It is still a long way to go, 10
            games. In March we only play one Premier League game - so we are not
            focused on the long term. Liverpool boss Arne Slot said: "It is
            still a long way to go, 10 games. In March we only play one Premier
            League game - so we are not focused on the long term.
          </p>
        </div>
        <div className="px-4 h-max sticky top-8">
          <h1 className="mt-8 mb-4 text-sm font-medium ">Author</h1>
          <div className="flex items-center gap-4 pb-4">
            <Image
              src={"/userImg.jpeg"}
              className={"w-12 h-12 rounded-full object-cover"}
              w={48}
              h={48}
            />
            <Link className="text-blue-800 text-sm">Jonh Doe</Link>
          </div>
          <p className="text-sm pb-4">
              Liverpool boss Arne Slot said: "It is still a long way to go.
            </p>
          <div className="flex gap-4">
              <Link><img src="/facebook.svg" alt="" /></Link>
              <Link><img src="/instagram.svg" alt="" /></Link>
            </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium ">Categories</h1>
          <div className="flex flex-col gap-2 underline">
            <Link className="text-sm" to={"/posts?cat="}>All</Link>
            <Link className="text-sm" to={"/posts?cat=web-design"}>Web Design</Link>
            <Link className="text-sm" to={"/posts?cat=development"}>Development</Link>
            <Link className="text-sm" to={"/posts?cat=database"}>Database</Link>
            <Link className="text-sm" to={"/posts?cat=seo"}>SEO</Link>
            <Link className="text-sm" to={"/posts?cat=marketing"}>Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm ">Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>
  );
}

export default SinglePostPage;
