import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderDetails = ({ userData, files }) => {
  const handleCheckout = () => {
    if (!validateUserData(userData, files)) {
      console.log("error");
    } else {
      console.log("checking out");
    }
  };

  const validateUserData = (item1, item2) => {
    if (
      item1.email.length > 0 &&
      item1.headshotType.length > 0 &&
      item1.gender.length > 0 &&
      item1.selectedPlan &&
      item2.length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <div className="flex justify-center">
            <dl class="w-full text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Email address
                </dt>
                <dd class="text-lg font-semibold">{userData?.email}</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Gender
                </dt>
                <dd class="text-lg font-semibold">{userData?.gender}</dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Headshot Type
                </dt>
                <dd class="text-lg font-semibold">{userData?.headshotType}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="w-1/2 overflow-auto">
          <div className="flex justify-center gap-2">
          <div
              className={`w-[300px] !bg-gradient-to-br !from-[#2963bede] to-[#073791de] rounded-3xl p-4 flex flex-col gap-2 justify-evenly items-center min-h-[400px] relative transition duration-300`}
            >
              
              <div className="text-[22px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text font-bold">{userData?.selectedPlan?.title}</div>
              <div className="text-[36px] line-through text-[#dad4d4]">
                {userData?.selectedPlan?.originalPrice}
              </div>
              <div className="text-[75px] font-bold">{userData?.selectedPlan?.price}</div>
              <div className="flex flex-col items-center gap-4">
                {userData?.selectedPlan?.features &&
                  userData?.selectedPlan?.features?.map((e, idx1) => (
                    <div
                      key={`PriceCardFeature${idx1}`}
                      className="flex justify-center gap-2  w-full"
                    >
                      <span className="flex flex-col w-auto justify-center">
                        <FaCheckCircle size={18} className="text-[#2563EB]"/>
                      </span>
                      <span className="text-lg text-wrap">{e}</span>
                    </div>
                  ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="w-full overflow-auto">
          <div className="flex gap-2 bg-[#1d2838]">
            {files &&
              files?.map((item) => <img src={item} className="h-[200px]" />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
