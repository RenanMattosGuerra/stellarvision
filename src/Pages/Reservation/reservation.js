import "./reservation.css";
import "./mediaquery.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Reservation = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [price, setPrice] = useState("0");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setFormattedDate(`${year}-${month}-${day}`);
  }, []);

  const handleTicketChange = (e) => {
    const value = parseInt(e.target.value);

    switch (value) {
      case 1:
        setPrice(500.0);
        break;
      case 2:
        setPrice(1000.0);
        break;
      case 3:
        setPrice(1400.0);
        break;
      case 4:
        setPrice(1900.0);
        break;
      case 5:
        setPrice(2200.0);
        break;
      default:
        setPrice("0");
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Reservation Confirmed !");
  }

  return (
    <section className="reservation-section">
      <div className="form-container">
        <h2>Reservation Form</h2>
        <form
          className="reservation-form"
          method="POST"
          action="."
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input type="name" name="name" id="name" required></input>

          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" required></input>

          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min={formattedDate}
            required
            className="date-input"
          ></input>

          <label htmlFor="time">Choose a Time</label>
          <select id="time" required>
            <option value="">Time</option>
            <option value="8:00">8:00</option>
            <option value="16:00">16:00</option>
            <option value="22:00">22:00</option>
          </select>

          <label htmlFor="number">Number of Tickets</label>
          <select id="number" onChange={handleTicketChange} required>
            <option value="">Tickets</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label htmlFor="rocket" required>
            Choose a Rocket
          </label>
          <select id="rocket">
            <option value="">Rockets</option>
            <option value="RCKT0123">RCKT0123</option>
            <option value="RCKT4567">RCKT4567</option>
            <option value="RCKT8910">RCKT8910</option>
          </select>

          <h5>{`Total : $${price}`}</h5>

          <input
            type="reset"
            value="Reset"
            className="submit-input"
            onClick={handleTicketChange}
          ></input>

          <ToastContainer />

          <input type="submit" value="Reserve" className="submit-input"></input>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
