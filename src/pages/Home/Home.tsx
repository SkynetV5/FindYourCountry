import Navbar from "../../components/Navbar";
import map from "../../assets/maps.PNG";
import Footer from "../../components/Footer";
import searchPage from "../../assets/searchPage.png";
import countryInfo from "../../assets/countryInfo.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  pt-24 w-full gap-10 h-full bg-gradient-to-b from-stone-100 to-stone-300">
        <motion.div
          className="flex flex-col text-center items-center justify-center mb-12"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-stone-800">
            Welcome to FindYourCountry
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Discover countries around the world.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col  items-center "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-3xl font-bold text-stone-800">
            With our app, you can:
          </p>
        </motion.div>
        <motion.div className="flex flex-col lg:items-start items-center text-center bg-stone-100 lg:px-40 px-10 py-28">
          <motion.p
            className="text-3xl font-bold text-stone-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            🔍 Search countries
          </motion.p>

          <motion.p
            className="mt-4 text-lg text-stone-600"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            You can search or find all countries in tab "All Countries"
          </motion.p>
          <motion.img
            src={searchPage}
            className="lg:w-2/3 w-[400px] rounded-lg border-3 border-stone-400 mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </motion.div>
        <div className="flex flex-col lg:items-end  items-center text-center lg:px-40 px-10 py-24">
          <motion.p
            className="text-3xl font-bold text-stone-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            📍 See key details like capital city, population, area, and official
            languages
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-stone-600"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            You can search or find all countries in tab "All Countries"
          </motion.p>
          <motion.img
            src={countryInfo}
            className="lg:w-2/3 w-[400px] rounded-lg border-3 border-stone-400 mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </div>
        <div className="flex flex-col lg:items-start items-center text-center  bg-stone-100 lg:px-40 px-10 py-28">
          <motion.p
            className="text-3xl font-bold text-stone-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            🗺️ View the country's location on a map
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-stone-600"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            You find in country details link to map (Google Maps /
            OpenStreetMap) with location of country
          </motion.p>
          <motion.img
            src={map}
            className="lg:w-2/3 w-[400px] rounded-lg border-3 border-stone-400 mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
