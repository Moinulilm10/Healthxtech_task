/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./OfferItems.css";

const OfferItem = ({ offerCard }) => {
  // console.log("🚀 ~ OfferItem ~ offerCard:", offerCard);
  return (
    <div
      className="offer-container"
      style={{ backgroundColor: `${offerCard.backgroundColor}` }}
    >
      <div
        className="top-circle"
        style={{ border: `20px solid ${offerCard.borderColor}` }}
      />
      <div
        className="bottom-circle"
        style={{ backgroundColor: `${offerCard.borderColor}` }}
      />
      <div className="container">
        <div className="container-left">
          <p className="text-sm">{offerCard.title}</p>
          <h1 className="container-offer">{offerCard.offer}</h1>
          <div className="link-container">
            <span className="container-icon">
              {offerCard.icon ? offerCard.icon : null}
            </span>
            <Link to="" className="container-link">
              {offerCard.buttonText}
            </Link>
          </div>
        </div>
        <img
          className="img-container"
          src={offerCard.image}
          alt="offerItem_image"
        />
      </div>
    </div>
  );
};

export default OfferItem;
