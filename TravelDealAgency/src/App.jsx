import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import HotelDeals from "./components/HotelDeals";
import TravelDeals from "./components/TravelDeals";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Destinations />
      <HotelDeals />
      <TravelDeals />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;