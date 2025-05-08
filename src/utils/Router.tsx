import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
