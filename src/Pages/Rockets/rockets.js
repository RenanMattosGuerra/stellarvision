import "./rockets.css";
import "./mediaquery.css";

const Rockets = () => {
  return (
    <section className="rockets-section">
      <article>
        <div
          className="rocket-img rocket-one"
          alt="Rocket One Ilustrative Image"
        ></div>
        <div className="rocket-text">
          <h2>RCKT0123</h2>
          <p>
            The RCKT0123 is the next generation of human spaceflight — a fully
            reusable rocket designed to carry explorers beyond Earth's orbit.
            Powered by advanced ion propulsion and lightweight composite alloys,
            it combines elegance, efficiency, and safety to make space travel
            accessible for everyone.
          </p>
        </div>
      </article>

      <article>
        <div
          className="rocket-img rocket-two"
          alt="Rocket Two Ilustrative Image"
        ></div>
        <div className="rocket-text">
          <h2>RCKT4567</h2>
          <p>
            The RCKT4567 is built for the new era of exploration — a
            high-capacity spacecraft engineered to transport passengers safely
            and comfortably beyond the edge of our world. Equipped with hybrid
            plasma engines and adaptive thermal shielding, it redefines the
            limits of human travel and brings the dream of space within reach.
          </p>
        </div>
      </article>

      <article>
        <div
          className="rocket-img rocket-three"
          alt="Rocket Three Ilustrative Image"
        ></div>
        <div className="rocket-text">
          <h2>RCKT8910</h2>
          <p>
            The RCKT8910 is the first luxury spacecraft designed for civilian
            orbital travel. With panoramic viewing decks, AI-assisted
            navigation, and zero-gravity comfort technology, it transforms
            spaceflight into a breathtaking experience — bringing the stars
            closer than ever before.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Rockets;
