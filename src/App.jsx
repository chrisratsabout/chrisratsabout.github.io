import { Route, Routes } from "react-router-dom";
import "../src/css/base.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/clients" element={<ClientsPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>

    </>
  );
}

export default App;
