import { customersModel } from "../model/customersModel.js";

export const addCustomer = async (userData, images) => {
  try {
    const data = JSON.parse(userData.body);
    let filteredImgUrls = images.map((item) => {
      return item.url;
    });
    // console.log(filteredImgUrls);
    let customerData = {
      email: data.email,
      gender: data.gender,
      images: filteredImgUrls,
      generationType: data.generationType,
    };

    switch (data.generationType) {
      case "individual":
        customerData.headshotType = data.headshotType;
        break;
      case "customize":
        customerData.customizeData = data.customizeData;
        break;
      case "prompts":
        customerData.promptData = data.promptData;
        break;
    }

    // console.log(customerData);

    // const customer = {
    // email: ,
    // gender: ,
    // generationType: ,
    // headshotType: ,
    // customizeData: ,
    // promptsData: ,
    // images: ,
    // }

    const customer = new customersModel(customerData);
    const result = await customer.save()
    if (result) {
      return { status: true, result: result };
    }
  } catch (error) {
    console.error(error);
    return { status: false, message: error.message };
  }
};
