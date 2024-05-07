import React, { useState } from "react";
import Tab from "../../components/Tab/Tab";
import axios from "axios";

const UploadPage = () => {
  const [checkoutUrl, setCheckoutUrl] = useState("");

  const handleCheckout = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/payment/checkout`)
      .then((response) => {
        window.location.href = response.data.sessionUrl;
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="w-full py-28 flex flex-col bg-[#161616] gap-28">
      <Tab />
      {checkoutUrl ? (
        <iframe
          src={checkoutUrl}
          title="Stripe Checkout"
          width="100%"
          height="800px"
        ></iframe>
      ) : (
        <button className="bg-white w-[200px]" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default UploadPage;
