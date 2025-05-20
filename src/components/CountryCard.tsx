import { useEffect, useState } from "react";
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
    <div className="w-full flex flex-col h-auto border-2 border-stone-500 rounded-md shadow-xl bg-stone-100">
      <Link to={`/country/${name}`}>
        <div className="flex flex-row justify-around py-3 h-24">
          <img className="w-24 h-auto" src={flag} alt={alt} />
          <img className="w-16 h-auto" src={coutOfArms} />
        </div>
        <div className="flex flex-col gap-1 py-2 text-center items-center justify-center border-t-2 border-stone-500">
          <p>{name}</p>
          <p>{official}</p>
        </div>
      </Link>
    </div>
  );
}
