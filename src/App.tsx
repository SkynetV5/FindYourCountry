import "./App.css";
import { BrowserRouter } from "react-router";
import Router from "./utils/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
