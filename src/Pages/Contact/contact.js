import "./contact.css";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Feedback Sent !");
  }

  return (
    <section className="contact-section">
      <div className="form-container">
        <h4>Contact us</h4>
        <form
          className="contact-form"
          method="POST"
          action="."
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input type="name" name="name" id="name" required></input>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" required></input>
          <label htmlFor="text">Questions / Comments / Feedback</label>
          <textarea
            className="text-input"
            name="text"
            id="text"
            required
          ></textarea>
          <ToastContainer />
          <input type="submit" value="Send" className="submit-input"></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;
