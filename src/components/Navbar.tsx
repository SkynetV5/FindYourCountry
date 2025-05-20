import searchIcon from "../assets/search.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "../assets/country.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex flex-row  w-full h-16 lg:border-b-0 border-b-1 lg:justify-start justify-between border-stone-400 text-stone-800 shadow-xl ">
      <div className="flex lg:px-10 px-5 items-center flex-row gap-3">
        <Link to={"/"}>
          <img src={logo} className="mb-1 lg:w-10 md:w-8 sm:w-8 w-8" />
        </Link>
        <Link to={"/"}>
          <p className="lg:text-lg md:text-md sm:text-sm">FindYourCountry</p>
        </Link>
      </div>
      <div className="hidden lg:flex items-center xl:w-2/3 w-1/2 justify-center ">
        <ul className="flex flex-row gap-10 items-center">
          <Link to={"/search"}>
            <li className=" flex flex-row lg:text-lg md:text-md sm:text-sm gap-1">
              Search
              <img src={searchIcon} />
            </li>
          </Link>
          <Link to={"/all-countries"}>
            <li className="lg:text-lg md:text-md sm:text-sm">All Countries</li>
          </Link>
          <li className="lg:text-lg md:text-md sm:text-sm">About</li>
        </ul>
      </div>
      <div className="lg:hidden flex items-center px-5">
        <button
          className="text-mainColorText focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute  top-16 left-0 w-full border-stone-500  border-b bg-white  border-brown text-center  py-4 z-40 shadow-xl">
          <ul className="flex flex-col gap-5 items-center">
            <Link to={"/search"}>
              <li className=" flex flex-row ml-5 lg:text-lg md:text-md sm:text-sm gap-1">
                Search
                <img src={searchIcon} />
              </li>
            </Link>
            <Link to={"/all-countries"}>
              <li className="lg:text-lg md:text-md sm:text-sm">
                All Countries
              </li>
            </Link>
            <li className="lg:text-lg md:text-md sm:text-sm">About</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
