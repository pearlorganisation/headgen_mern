import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/payment/checkout`)
      .then((response) => {
        setIsLoading(false);

        window.location.href = response.data.sessionUrl;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="h-[500px] flex flex-col justify-center items-center gap-4">
        {isLoading && (
            <div className="text-2xl text-white ">
                Redirecting to stripe gateway
            </div>
        )}
      <button
        className="bg-white w-[200px] font-semibold rounded-lg hover:bg-[#f1f1f1]"
        onClick={handleCheckout}
      >
        Test Stripe
      </button>
    </div>
  );
};

export default Checkout;
