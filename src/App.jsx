import { Route, Routes } from "react-router-dom";
import "../src/css/base.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import ThanksPage from "./pages/ThanksPage";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage title={"Chris Ratsabout"} />}
          ></Route>
          <Route path="/#/about" element={<AboutPage title={"About"} />}></Route>
          <Route
            path="/#/clients"
            element={<ClientsPage title={"Clients"} />}
          ></Route>
          <Route
            path="/#/contact"
            element={<ContactPage title={"Contact"} />}
          ></Route>
          <Route
            path="/#/thanks"
            element={<ThanksPage title={"Thanks"} />}
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
