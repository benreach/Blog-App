import React from "react";
import Image from "./Image";
function Comment() {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4 pb-4">
        <Image
          src={"userImg.jpeg"}
          className={"rounded-full w-10 h-10 object-cover"}
          w={40}
        />
        <h1 className="text-blue-800">Jonh Doe</h1>
        <span>2 days ago</span>
      </div>
      <p className="text-justify">
        Liverpool boss Arne Slot said: "It is still a long way to go, 10 games.
        In March we only play one Premier League game - so we are not focused on
        the long term. Liverpool boss Arne Slot said: "It is still a long way to
        go, 10 games. In March we only play one Premier League game - so we are
        not focused on the long term.
      </p>
    </div>
  );
}

export default Comment;
