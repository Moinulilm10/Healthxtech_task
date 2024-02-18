/* eslint-disable react/prop-types */
const Service = ({ service }) => {
  return (
    <div className="service-card">
      <div className="icon">{service.icon}</div>
      <div>
        <h1>{service.title}</h1>
        <p>{service.subTitle}</p>
      </div>
    </div>
  );
};

export default Service;
