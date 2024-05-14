import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFile = async (file) => {
  try {
    console.log(file)

    // const result = await cloudinary.uploader.upload(file.path, {
    //   folder: "headgen",
    // });

    // // Delete file from disk storage after successful upload to Cloudinary
    // fs.unlink(file.path, (err) => {
    //   if (err) {
    //     console.error("Error deleting file from disk:", err);
    //   } else {
    //     console.log("File deleted from disk:", file.path);
    //   }
    // });

    return { status: true, result: result };
  } catch (error) {
    // console.error("Error uploading file to Cloudinary:", error);
    return { status: false, message: error?.message };
  }
};
