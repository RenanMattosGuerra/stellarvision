import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Rockets from "./Pages/Rockets/rockets";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import ScrollToTop from "./ScrollToTop";
import Reservation from "./Pages/Reservation/reservation";

const RoutesApp = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/rockets" element={<Rockets></Rockets>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/reservation"
          element={<Reservation></Reservation>}
        ></Route>
      </Routes>
    </div>
  );
};

export default RoutesApp;
