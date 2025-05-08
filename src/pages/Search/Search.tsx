import searchIcon from "../../assets/search.svg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("name");
  const [searchPlaceholder, setSearchPlaceholder] =
    useState<string>("Search by name...");
  const [searchValue, setSearchValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleSearchChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSearchTerm(event.target.value);
    if (event.target.value === "name") {
      setSearchPlaceholder("Search by name...");
    } else if (event.target.value === "capital") {
      setSearchPlaceholder("Search by capital...");
    } else if (event.target.value === "code") {
      setSearchPlaceholder("Search by code...");
    } else if (event.target.value === "language") {
      setSearchPlaceholder("Search by language...");
    } else if (event.target.value === "region") {
      setSearchPlaceholder("Search by region...");
    } else if (event.target.value === "subregion") {
      setSearchPlaceholder("Search by subregion...");
    }
  }

  function fetchData(searchTerm: string, searchValue: string) {
    if (searchTerm === "") {
      return;
    }
    if (searchValue === "") {
      return;
    }
    fetch(`https://restcountries.com/v3.1/${searchTerm}/${searchValue}`)
      .then((response) => {
        setLoading(true);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        if (response.status === 404) {
          setErrorMessage("Country not found");
          setLoading(false);
          return;
        }
        if (response.status === 500) {
          setErrorMessage("Server error, please try again later");
          setLoading(false);
          return;
        }
        if (response.status === 200) {
          setErrorMessage("");
          setLoading(false);
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          console.log(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage("An error occurred: " + error.message);
        setLoading(false);
      });
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-40 h-screen">
        <h1 className="ml-5 flex flex-row gap-3 text-4xl font-bold text-stone-800">
          Search
          <img src={searchIcon} className="w-8 mt-1" />
        </h1>
        <div className="flex flex-col w-full items-center">
          <input
            type="text"
            className="w-1/3 h-8 mt-4 border-1 border-stone-600 rounded-md pl-2"
            placeholder={searchPlaceholder}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <select
            className="w-1/3 h-8 mt-4 border-1 border-stone-600 rounded-md pl-2"
            onChange={handleSearchChange}
          >
            <option value="name">Name</option>
            <option value="capital">Capital</option>
            <option value="alpha">Code</option>
            <option value="lang">Language</option>
            <option value="region">Region</option>
            <option value="subregion">Subregion</option>
          </select>
        </div>
        <p className="mt-4 text-lg text-stone-600">
          Search for countries and their details.
        </p>
        <button
          type="button"
          onClick={() => fetchData(searchTerm, searchValue)}
          disabled={!searchValue}
          className="mt-4 border-1 border-stone-600 px-10 disabled:cursor-default disabled:bg-stone-300 disabled:border-stone-300 disabled:text-stone-500 py-2 rounded-md bg-stone-800 text-white hover:bg-white hover:text-stone-800 cursor-pointer transition duration-300 ease-in-out"
        >
          Search
        </button>
        {loading && <p className="mt-4 text-lg text-stone-600">Loading...</p>}
        {errorMessage && (
          <p className="mt-4 text-lg text-red-600">{errorMessage}</p>
        )}
      </div>
      <Footer />
    </>
  );
}
