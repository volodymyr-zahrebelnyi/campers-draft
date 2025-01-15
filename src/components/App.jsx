import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import CamperDetailsPage from "../pages/CamperDetailsPage/CamperDetailsPage";
import css from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={css.app}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
