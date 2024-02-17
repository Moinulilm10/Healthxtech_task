import Banner from "../Banner/Banner";
import OfferItems from "../OfferSection/OfferItems";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <OfferItems />
    </div>
  );
};

export default Home;
