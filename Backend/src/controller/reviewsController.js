import { reviewsModel } from "../model/reviewsModel.js";
import { asyncHandler } from "../utils/errorHandler/asyncHandler.js";
import { uploadFile } from "../utils/cloudinary.js";
import { customersModel } from "../model/customersModel.js";

export const getReviews = asyncHandler(async (req, res) => {
  const limit = req?.query?.limit || 12;
  const page = req?.query?.page || 1;
  const skip = (page - 1) * limit;
  let totalPages = 0;

  const totalAttendees = await reviewsModel.countDocuments();
  totalPages = Math.ceil(totalAttendees / limit);

  const result = await reviewsModel.find().skip(skip).limit(limit);

  res.status(200).json({ status: true, totalPages, reviewsData: result });
});

export const getReviewData = asyncHandler(async (req, res) => {
  const { reviewId } = req.params;
  const result = await reviewsModel.findById(reviewId);

  res.status(200).json({ status: true, reviewsData: result });
});

export const addReview = asyncHandler(async (req, res) => {
  const image = await uploadFile(req?.files);
  const customer = await customersModel.findOne({ email: req.body.email });
  let verification = { name: "Unverified", color: "#000000" }
  if(customer){
    switch (customer?.generationType) {
      case "freeHeadshot":
        verification = { name: "Free Headshot", color: "#4a0f93" };
        break;
      default:
        verification = { name: "Verified Purchase", color: "#224cc2" };
        break;
    }
  }

  const payload = {
    title: req.body.title,
    review: req.body.review,
    image: image.result[0],
    name: req.body.name,
    verification: verification,
    stars: req.body.stars,
    email: req.body.email
  };

  await reviewsModel.create(payload);
  res.status(200).json({ status: true, message: "Review saved successfully" });
});

export const deleteReview = asyncHandler(async (req, res) => {
  const { reviewId } = req.params;
  if (!reviewId) {
    return res
      .status(400)
      .json({ status: false, message: "No review id provided" });
  }
  const isIdValid = await reviewsModel.findByIdAndDelete(reviewId);
  if (!isIdValid) {
    return res
      .status(400)
      .json({ status: false, messaeg: "No review found with given id!!" });
  }

  res
    .status(200)
    .json({ status: true, message: "Review deleted successfully" });
});