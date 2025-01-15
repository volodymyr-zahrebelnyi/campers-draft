import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import css from "./CamperDetailsPage.module.css";

function CamperDetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCamperDetails() {
      try {
        const { data } = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
        );
        setCamper(data);
      } catch (err) {
        toast.error("Failed to fetch camper details. Please try again later.");
      }
    }
    fetchCamperDetails();
  }, [id]);

  // if (error) return <p className={css.error}>{error}</p>;
  if (!camper) return <p>Loading camper details...</p>;

  return (
    <div className={css.camperDetails}>
      <h1>{camper.name}</h1>
      <img src={camper.image} alt={camper.name} className={css.camperImage} />
      <p>Price: {camper.price.toFixed(2)}</p>
      <p>Location: {camper.location}</p>
      <p>Features:</p>
      <ul>
        {camper.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default CamperDetailsPage;
