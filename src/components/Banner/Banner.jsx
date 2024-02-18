import banner from "../../assets/banner-pic.png";
import Sidebar from "../Sidebar/Sidebar";
import "../Sidebar/Sidebar.css";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Sidebar />
      <div className="banner">
        <div className="banner-text-container">
          <p>
            Up to <span>70%</span> of on Black Friday
          </p>
          <h1>
            TRENDY <span>FASHION</span> <br /> COLLECTION
          </h1>
          <button type="button">Buy Now</button>
        </div>
        <div className="banner-img">
          <img src={banner} alt="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
