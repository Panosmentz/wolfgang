import Banner from "./Banner/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import TextImage from "./TextImage/TextImage";
import Awards from "./Awards/Awards";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <TextImage />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
