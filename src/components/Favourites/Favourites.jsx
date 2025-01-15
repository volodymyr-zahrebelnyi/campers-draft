import { useSelector } from "react-redux";
import CamperCard from "./CamperCard";
import css from "./Favourites.module.css";

function Favorites() {
  // const favorites = useSelector((state) => state.campers.favorites);
  const favorites = useSelector((state) => state.favorites);

  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <div className={css.favorites}>
      <h2>Your Favorites</h2>
      <div className={css.favoritesGrid}>
        {favorites.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
