import searchIcon from "../assets/search.svg";
import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex flex-row  w-full h-16 border-b  border-stone-500 text-stone-800 shadow-xl ">
      <div className="flex px-10 items-center">
        <Link to={"/"}>
          <p className="text-lg">FindYourCountry</p>
        </Link>
      </div>
      <div className="flex items-center w-3/4 justify-center ">
        <ul className="flex flex-row gap-10 items-center">
          <Link to={"/search"}>
            <li className=" flex flex-row text-lg gap-1">
              Search
              <img src={searchIcon} />
            </li>
          </Link>
          <li className="text-lg">All Countries</li>
          <li className="text-lg">About</li>
          <li className="text-lg">Contact</li>
        </ul>
      </div>
    </div>
  );
}
