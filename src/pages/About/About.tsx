import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />
      <motion.div
        className="relative flex  flex-col w-full h-full items-center pt-14 mb-24 "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-6xl font-semibold text-stone-800 text-center mb-24">
          About
        </p>
        <div className="max-w-3xl text-center text-stone-700 text-lg space-y-6 lg:px-5 px-10">
          <p>
            This application uses the{" "}
            <a
              href="https://restcountries.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline font-semibold"
            >
              REST Countries API
            </a>{" "}
            to display comprehensive information about countries all over the
            world.
          </p>

          <p>With this app, you can:</p>
          <ul className="list-disc list-inside text-left mx-auto max-w-xl">
            <li>Browse and search for countries by name</li>
            <li>Filter countries by region or subregion</li>
            <li>
              View detailed country data such as population, capital, area, and
              more
            </li>
            <li>
              See each country's flag and learn about their official languages
              and currencies
            </li>
          </ul>

          <p>
            This project was created to help me practice working with REST APIs,
            data fetching in React, and responsive UI design using Tailwind CSS.
            It's also a fun way to explore facts about the world!
          </p>

          <p>
            Built with <strong>React</strong>, <strong>Tailwind CSS</strong>,
            and data from the{" "}
            <a
              href="https://restcountries.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              REST Countries API
            </a>
            .
          </p>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
