import React, { useEffect } from "react";

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
    <div className="flex  justify-between items-center">
      <div className="w-1/3">
        <div>
          <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
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

      <div className="w-[60%] overflow-auto">
        <div className="flex gap-2">
          {files &&
            files?.map((item) => (
          <img src={item} className="h-[200px]" />
             
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
