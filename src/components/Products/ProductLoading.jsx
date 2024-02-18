import "./ProductLoading.css";

const ProductLoading = () => {
  return (
    // <div className="loader-container">
    //   <div className="product-loader" />
    // </div>
    <div className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ProductLoading;
