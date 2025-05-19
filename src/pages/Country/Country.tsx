import { Link, useParams } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MoonLoader } from "react-spinners";

export default function Country() {
  const { countryName } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [countryInfo, setCountryInfo] = useState<object>([]);
  const [googleMapsUrl, setGoogleMapsUrl] = useState<string>("");
  const [openStreetsMapsUrl, setOpenStreetsMapsUrl] = useState<string>("");
  const [borderCountries, setBorderCountries] = useState<[]>([]);
  console.log(countryName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
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
          setCountryInfo(data[0]);
        }
      } catch (error) {
        setIsError(true);
        setErrorMessage("An error occurred: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [countryName]);

  console.log(countryInfo);

  useEffect(() => {
    if (countryInfo?.maps?.googleMaps) {
      setGoogleMapsUrl(countryInfo.maps.googleMaps);
    }
    if (countryInfo?.maps?.openStreetMaps) {
      setOpenStreetsMapsUrl(countryInfo.maps.openStreetMaps);
    }
  }, [countryInfo]);

  const fetchBorderCountry = async (codeCountry: string) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${codeCountry}`
      );
      const data = await response.json();
      if (data && Array.isArray(data) && data[0]?.name?.common) {
        return data[0].name.common;
      }
    } catch (error) {
      console.log(error);
    }
    return codeCountry;
  };

  useEffect(() => {
    const getBorderCountries = async () => {
      if (countryInfo?.borders && Array.isArray(countryInfo.borders)) {
        const names = await Promise.all(
          countryInfo.borders.map((border: string) =>
            fetchBorderCountry(border)
          )
        );
        setBorderCountries(names);
      } else {
        setBorderCountries([]);
      }
    };
    getBorderCountries();
  }, [countryInfo]);

  return (
    <>
      {loading && (
        <div className="w-full h-screen justify-center items-center flex flex-col gap-5">
          <MoonLoader />
          <p className="text-2xl text-stone-500">Ładowanie</p>
        </div>
      )}
      {isError && !loading && (
        <div className="w-full h-screen justify-center items-center flex flex-col gap-5">
          <p className="text-5xl text-stone-700">{errorMessage}</p>
          <p className="text-2xl text-stone-500">Spróbuj ponownie później</p>
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
            <p className="text-6xl font-semibold text-stone-800">
              {countryInfo?.name?.common}
            </p>
            <p className="text-2xl font-semibold text-stone-700 pt-2">
              {countryInfo?.name?.official}
            </p>
            <div className="w-full h-full mx-20 mt-10 lg:px-32 md:px-20 px-5  ">
              <div className="border-2 rounded-sm flex bg-stone-100 border-stone-500 shadow-xl">
                <div className="w-2/6 min-h-full border-r-2 border-b-2 flex flex-col px-2 py-10 border-stone-200 gap-10 shadow-xl items-center">
                  <div>
                    <p className="text-center text-md mb-5">Flag:</p>
                    <img
                      className="w-32 h-auto"
                      src={countryInfo?.flags?.svg}
                      alt={countryInfo?.flags?.alt}
                    />
                  </div>
                  <div>
                    <p className="text-center text-md mb-5">Coat of arms:</p>
                    <img
                      className="w-32 h-auto"
                      src={countryInfo?.coatOfArms?.svg}
                    />
                  </div>
                  <div>
                    <p className="text-center text-md mb-5">Maps:</p>
                    <p className="text-center text-sm mb-5 font-semibold hover:underline">
                      <a href={googleMapsUrl} target="_blank">
                        Google Maps
                      </a>
                    </p>
                    <p className="text-center text-sm mb-5 font-semibold hover:underline">
                      <a href={openStreetsMapsUrl} target="_blank">
                        Open Streets Maps
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-4/6 px-10 py-10 gap-5">
                  <div>
                    <p className="text-xl font-semibold">Native name:</p>
                    {countryInfo?.name?.nativeName && (
                      <ul className="pt-2">
                        {(() => {
                          const firstKey = Object.keys(
                            countryInfo.name.nativeName
                          )[0];
                          const native = countryInfo.name.nativeName[firstKey];
                          return (
                            <>
                              <li>Official: {native.official}</li>
                              <li>Common: {native.common}</li>
                            </>
                          );
                        })()}
                      </ul>
                    )}
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Capital:</p>
                    <ul className="pt-2">
                      {countryInfo?.capital &&
                        countryInfo.capital.map((capital, index) => (
                          <li key={index}>{capital}</li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Languages:</p>
                    <ul className="pt-2">
                      {countryInfo?.languages &&
                        Object.keys(countryInfo.languages).map((language) => (
                          <li key={language}>
                            {countryInfo.languages[language]}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      {countryInfo?.continents?.length == 1
                        ? "Continent"
                        : "Continents"}
                      :
                    </p>
                    <ul className="pt-2">
                      {countryInfo?.continents &&
                        countryInfo.continents.map((continent, index) => (
                          <li key={index}>{continent}</li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    {" "}
                    <p className="text-xl font-semibold">
                      Population:{" "}
                      <span className="text-md pl-1 font-normal">
                        {countryInfo?.population}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Currencies:</p>
                    <ul className="pt-2">
                      {countryInfo?.currencies &&
                        Object.entries(countryInfo.currencies).map(
                          ([index, currency]) => (
                            <li key={index}>
                              <p className="font-semibold">
                                {index}:{" "}
                                <span className="font-normal">
                                  {currency?.name} ({currency?.symbol}
                                </span>
                                )
                              </p>
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      Postalcode format:{" "}
                      <span className="text-md pl-1 font-normal">
                        {countryInfo?.postalCode?.format}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Borders:</p>
                    <ul className="pt-2 w-full flex flex-row gap-5 flex-wrap">
                      {borderCountries.length > 0 ? (
                        borderCountries.map((name, id) => (
                          <Link
                            key={id}
                            to={
                              name === "United States"
                                ? "/country/USA"
                                : `/country/${name}`
                            }
                          >
                            <li className="hover:underline" key={id}>
                              {name}
                            </li>
                          </Link>
                        ))
                      ) : (
                        <li>No borders</li>
                      )}
                    </ul>
                  </div>
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
