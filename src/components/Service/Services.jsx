import { servicesData } from "../../data/ServiceData";
import Service from "./Service";
import "./Service.css";

const Services = () => {
  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <Service key={index} service={service} />
      ))}
    </div>
  );
};

export default Services;
