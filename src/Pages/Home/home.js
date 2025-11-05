import "./home.css";
import "./homemediaquery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <div>
          <div className="earth-gif"></div>
        </div>
        <div className="main-wrapper">
          <img className="main-img" alt="Ilustrative Astronaut"></img>

          <Link to="/reservation" className="home-link">
            <div className="main-text">
              <h2>Explore Beyond Earth</h2>
              <p>Go to space with us</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>
        </div>
      </main>
      <section className="section-container">
        <div className="section-wrapper">
          <h2>Humanity’s next step begins with vision</h2>
          <p>Innovation beyond the atmosphere</p>
          <Link to="/rockets" className="home-link">
            <p>Meet our rockets</p>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </Link>
        </div>
        <div className="section-img" alt="Ilustrative Satellite image"></div>
      </section>
    </div>
  );
};

export default Home;
