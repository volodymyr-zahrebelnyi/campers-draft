import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./CamperCard.module.css";

function CamperCard({ camper }) {
  return (
    <div className={css.camperCard}>
      <img
        src={camper.image}
        alt={camper.name}
        className={css.camperCardImage}
      />
      <h3>{camper.name}</h3>
      <p>Price: {camper.price.toFixed(2)}</p>
      <Link to={`/catalog/${camper.id}`} className={css.showMoreButton}>
        Show more
      </Link>
    </div>
  );
}

CamperCard.propTypes = {
  camper: PropTypes.object.isRequired,
};

export default CamperCard;
