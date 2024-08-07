import { asyncHandler } from "../utils/errorHandler/asyncHandler.js";
import { blogsModel } from "../model/blogsModel.js";
import { uploadFile } from "../utils/cloudinary.js";
import chalk from "chalk";

export const getBlogs = asyncHandler(async (req, res) => {
  const limit = req?.query?.limit || 12;
  const page = req?.query?.page || 1;
  const skip = (page - 1) * limit;
  let totalPages = 0;

  const totalAttendees = await blogsModel.countDocuments();
  totalPages = Math.ceil(totalAttendees / limit);

  const result = await blogsModel.find().skip(skip).limit(limit);

  res.status(200).json({ status: true, totalPages, blogsData: result });
});

export const getBlogData = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  const result = await blogsModel.findById(blogId);

  res.status(200).json({ status: true, blogData: result });
});

export const addBlog = asyncHandler(async (req, res) => {
  const bannerImg = await uploadFile(req?.files);
  console.log(bannerImg);

  const payload = {
    title: req.body.title,
    content: req.body.content,
    banner: bannerImg.result[0].url,
  };

  await blogsModel.create(payload);
  res.status(200).json({ status: true, message: "Blog saved successfully" });
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;
  if (!blogId) {
    return res
      .status(400)
      .json({ status: false, message: "No blog id provided" });
  }
  const isIdValid = await blogsModel.findByIdAndDelete(blogId);
  if (!isIdValid) {
    return res
      .status(400)
      .json({ status: false, messaeg: "No note found with given id!!" });
  }

  res.status(200).json({ status: true, message: "blog deleted successfully" });
});
