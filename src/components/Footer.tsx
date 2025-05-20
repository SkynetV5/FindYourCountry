import logo from "../assets/country.png";
export default function Footer() {
  return (
    <div className="relative flex z-50 lg:flex-row flex-col w-full lg:h-16 h-auto border-t md:py-1 py-5 bg-stone-100 border-stone-500 text-stone-800 shadow-xl justify-center lg:gap-10 gap-5  items-center">
      <div className="flex lg:flex-row flex-col items-center lg:gap-5 gap-2 lg:pt-0 pt-3">
        <img src={logo} className="mb-1 md:w-9 w-6" />
        <p className="text-sm">© 2025 FindYourCountry. All rights reserved.</p>
      </div>
      <p className="text-sm ml-2">Created by SkynetV5 (Kamil Jodłowski)</p>
      <p className="text-sm ml-2 lg:pb-0 pb-5">
        Contact:{" "}
        <a href="mailto:" className="text-blue-500 hover:underline">
          findyourcountry@gmail.com
        </a>
      </p>
    </div>
  );
}
