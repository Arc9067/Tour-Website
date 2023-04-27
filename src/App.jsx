import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Product from "./Components/Product/Product";
import Aboutus from "./Components/Aboutus/Aboutus";
import SubFooter from "./Components/SubFooter/SubFooter";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <About />
        <Product />
        <Aboutus />
        <SubFooter />
      </main>
        <Footer />
    </>
  );
}

export default App;
