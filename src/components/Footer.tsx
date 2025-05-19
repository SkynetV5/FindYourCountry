export default function Footer() {
  return (
    <div className="relative flex z-50 flex-row w-full h-16 border-t  bg-stone-100 border-stone-500 text-stone-800 shadow-xl justify-center gap-10 items-center">
      <p className="text-sm">© 2025 FindYourCountry. All rights reserved.</p>
      <p className="text-sm ml-2">Created by SkynetV5 (Kamil Jodłowski)</p>
      <p className="text-sm ml-2">
        Contact:{" "}
        <a href="mailto:" className="text-blue-500 hover:underline">
          findyourcountry@gmail.com
        </a>
      </p>
    </div>
  );
}
