import React from "react";
import Agents from "../../Agents/Agents";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-20 flex flex-col">
      <Link className="m-auto" to={`/newagent/`}>
        <button className=" p-4 bg-black text-white rounded-full w-[150px]  hover:bg-slate-700">
          Join the Team !
        </button>
      </Link>
      <Agents />
    </div>
  );
};

export default Home;
