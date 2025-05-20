import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Country from "../pages/Country/Country";
import NotFound from "../pages/NotFound/Notfound";
import AllCountries from "../pages/AllCountries/AllCountries";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/country/:countryName" element={<Country />} />
      <Route path="/all-countries" element={<AllCountries />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
