import Banner from "../Banner/Banner";
import OfferItems from "../OfferSection/OfferItems";
import Products from "../Products/Products";
import Services from "../Service/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <OfferItems />
      <div className="services-products-container flex flex-col lg:flex lg:flex-row">
        <Services />
        <Products />
      </div>
    </div>
  );
};

export default Home;
