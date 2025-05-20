import { useEffect, useState } from "react";
import CountryCard from "../../components/CountryCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useNavigate, useParams } from "react-router";
import { MoonLoader } from "react-spinners";
import type { CountryInfo } from "../../components/interfaces";

export default function SearchedCountries() {
  const { searchTerm, searchValue } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [countryInfo, setCountryInfo] = useState<CountryInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/${searchTerm}/${searchValue}`
        );
        if (response.status === 404) {
          navigate("/notfound");
          setLoading(false);
          return;
        }
        if (response.status === 500) {
          setErrorMessage("Server error, please try again later");
          setIsError(true);
          setLoading(false);
          return;
        }
        if (response.status === 200) {
          setIsError(false);
          setErrorMessage("");
        }
        const data = await response.json();
        if (data) {
          setCountryInfo(data);
        }
      } catch (error) {
        setIsError(true);
        setErrorMessage("An error occurred: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(countryInfo);

  return (
    <>
      {loading && (
        <div className="w-full h-screen justify-center items-center flex flex-col gap-5">
          <MoonLoader />
          <p className="text-2xl text-stone-500">Ładowanie</p>
        </div>
      )}
      {isError && !loading && (
        <div className="w-full h-screen justify-center text-center items-center flex flex-col gap-5">
          <p className="lg:text-5xl text-2xl text-stone-700">{errorMessage}</p>
          <p className="lg:text-2xl text-lg text-stone-500">
            Spróbuj ponownie później
          </p>
          <button
            className="mt-4 border-1 border-stone-600 px-10 py-2 rounded-md bg-stone-800 text-white hover:bg-white hover:text-stone-800 cursor-pointer transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            Back to start page
          </button>
        </div>
      )}
      {!isError && !loading && (
        <>
          <Navbar />
          <div className="relative flex z-10 flex-col w-full h-full items-center pt-14 mb-24 ">
            <p className="text-6xl font-semibold text-stone-800 text-center">
              Searched Countries
            </p>
            <div>
              <div className="w-screen h-full mt-10 lg:px-32 md:px-20 px-5  ">
                <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 items-start">
                  {countryInfo.map((country, idx) => (
                    <CountryCard
                      key={idx}
                      name={country.name.common}
                      official={country.name.official}
                      flag={country.flags.svg}
                      alt={country.flags.alt}
                      coutOfArms={country.coatOfArms.svg}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
