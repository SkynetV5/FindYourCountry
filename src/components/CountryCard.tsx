import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
interface CountryCardProps {
  name: string;
  official: string;
  flag: string;
  alt: string;
  coutOfArms: string;
}

export default function CountryCard({
  name,
  official,
  flag,
  alt,
  coutOfArms,
}: CountryCardProps) {
  return (
    <motion.div
      className="w-full flex flex-col h-full border-2 border-stone-500 rounded-md shadow-xl bg-stone-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to={`/country/${name}`}>
        <div className="flex flex-row justify-around py-3 h-24 gap-5 ">
          <img className="w-24 h-auto" src={flag} alt={alt} />
          {coutOfArms !== undefined ? (
            <img className="w-16 h-auto" src={coutOfArms} />
          ) : (
            <p className="flex items-center justify-center">None</p>
          )}
        </div>
        <div className="flex flex-col gap-1 py-2 text-center items-center justify-center border-t-2 border-stone-500">
          <p>{name}</p>
          <p>{official}</p>
        </div>
      </Link>
    </motion.div>
  );
}
