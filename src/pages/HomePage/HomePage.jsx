import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

function HomePage() {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate("/catalog");
  };

  return (
    <div className={css.homePage}>
      <div className={css.homeBanner}>
        <h1>Welcome to TravelTrucks</h1>
        <p>Discover the best campers for your next adventure.</p>
        <button className={css.viewNowButton} onClick={goToCatalog}>
          View Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;
