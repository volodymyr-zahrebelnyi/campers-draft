import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersSlice.js";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Button from "../../components//Button/Button.jsx";
import css from "./CatalogPage.module.css";

function CatalogPage() {
  const dispatch = useDispatch();
  const { campers, status } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (status === "loading") return <p>Loading campers...</p>;
  if (status === "failed") return <p>Failed to load campers.</p>;

  return (
    <div className={css.catalogPage}>
      <Filters />
      <div className={css.catalogGrid}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>
      <Button
        onClick={() => dispatch(fetchCampers())}
        disabled={status === "loading"}
      >
        Load More
      </Button>
    </div>
  );
}

export default CatalogPage;
