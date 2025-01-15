import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchFilteredCampers } from "../../redux/campersSlice.js";
import css from "./Filters.module.css";

function Filters() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    features: {
      AC: false,
      kitchen: false,
      bathroom: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        features: { ...prev.features, [name]: checked },
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const applyFilters = () => {
    dispatch(fetchFilteredCampers(filters));
  };

  return (
    <div className={css.filters}>
      <h3>Filters</h3>
      <div>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Type:
          <select name="type" value={filters.type} onChange={handleChange}>
            <option value="">All</option>
            <option value="van">Van</option>
            <option value="motorhome">Motorhome</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="AC"
            checked={filters.features.AC}
            onChange={handleChange}
          />
          Air Conditioning
        </label>
        <label>
          <input
            type="checkbox"
            name="kitchen"
            checked={filters.features.kitchen}
            onChange={handleChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            name="bathroom"
            checked={filters.features.bathroom}
            onChange={handleChange}
          />
          Bathroom
        </label>
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filters;
