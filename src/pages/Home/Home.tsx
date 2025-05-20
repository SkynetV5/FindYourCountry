import Navbar from "../../components/Navbar";
import map from "../../assets/maps.PNG";
import Footer from "../../components/Footer";
import searchPage from "../../assets/searchPage.png";
import countryInfo from "../../assets/countryInfo.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  pt-24 w-full gap-10 h-full bg-gradient-to-b from-stone-100 to-stone-300">
        <div className="flex flex-col items-center justify-center mb-24">
          <h1 className="text-4xl font-bold text-stone-800">
            Welcome to FindYourCountry
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Discover countries around the world.
          </p>
        </div>
        <div className="flex flex-col  items-center ">
          <p className="text-3xl font-bold text-stone-800">
            With our app, you can:
          </p>
        </div>
        <div className="flex flex-col bg-stone-100 px-40 py-28">
          <p className="text-3xl font-bold text-stone-800">
            🔍 Search countries
          </p>

          <p className="mt-4 text-lg text-stone-600">
            You can search or find all countries in tab "All Countries"
          </p>
          <img
            src={searchPage}
            className="w-2/3 rounded-lg border-3 border-stone-400 mt-4"
          />
        </div>
        <div className="flex flex-col items-end   px-40 py-24">
          <p className="text-3xl font-bold text-stone-800">
            📍 See key details like capital city, population, area, and official
            languages
          </p>
          <p className="mt-4 text-lg text-stone-600">
            You can search or find all countries in tab "All Countries"
          </p>
          <img
            src={countryInfo}
            className="w-2/3 rounded-lg border-3 border-stone-400 mt-4"
          />
        </div>
        <div className="flex flex-col  bg-stone-100  px-40 py-28">
          <p className="text-3xl font-bold text-stone-800">
            🗺️ View the country's location on a map
          </p>
          <p className="mt-4 text-lg text-stone-600">
            You find in country details link to map (Google Maps /
            OpenStreetMap) with location of country
          </p>
          <img
            src={map}
            className="w-2/3 rounded-lg border-3 border-stone-400 mt-4"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
