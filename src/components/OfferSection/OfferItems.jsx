import { offersData } from "../../data/OfferData";
import OfferItem from "./OfferItem";
import "./OfferItems.css";

const OfferItems = () => {
  return (
    <div className="offers-container">
      {offersData.map((offerCard, index) => (
        <OfferItem key={index} offerCard={offerCard} />
      ))}
    </div>
  );
};

export default OfferItems;
