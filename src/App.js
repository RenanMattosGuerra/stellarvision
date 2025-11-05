import RoutesApp from "./routes";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RoutesApp></RoutesApp>
      <Footer></Footer>
    </div>
  );
}

export default App;
