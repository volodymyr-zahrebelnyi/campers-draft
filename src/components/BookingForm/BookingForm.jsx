import { useState } from "react";
import css from "./BookingForm.module.css";

function BookingForm() {
  const [form, setForm] = useState({ name: "", date: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // тут можно отправить данные на сервер
    setSuccess(true);
  };

  return (
    <div className={css.bookingForm}>
      <h3>Book This Camper</h3>
      {success ? (
        <p>Booking successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Book Now</button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
