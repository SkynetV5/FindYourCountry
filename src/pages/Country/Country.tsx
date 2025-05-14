import { useParams } from "react-router";
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
          <div className="flex z-10 flex-col w-full h-screen items-center pt-14 mb-24">
            <p className="text-6xl font-semibold text-stone-800">
              {countryInfo?.name?.common}
            </p>
            <div className="w-full h-full mx-20 mt-10 px-48 ">
              <div className="border-2 rounded-sm flex bg-stone-200 border-stone-500 shadow-xl ">
                <div className="w-2/6 h-full border-r-2 flex flex-col px-2 py-10 border-stone-200 gap-10 shadow-xl items-center">
                  <div>
                    <p className="text-center text-md mb-5">Flag:</p>
                    <img
                      className="w-40"
                      src={countryInfo?.flags?.svg}
                      alt={countryInfo?.flags?.alt}
                    />
                  </div>
                  <div>
                    <p className="text-center text-md mb-5">Coat of arms:</p>
                    <img className="w-40" src={countryInfo?.coatOfArms?.svg} />
                  </div>
                </div>
                <div className="w-4/6"></div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
