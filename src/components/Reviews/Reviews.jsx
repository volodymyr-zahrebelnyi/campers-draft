import PropTypes from "prop-types";
import css from "./Reviews.module.css";

function Reviews({ reviews }) {
  if (!reviews.length) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className={css.reviews}>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}/5</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Reviews;
