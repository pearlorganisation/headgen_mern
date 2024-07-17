import mongoose from "mongoose";
import { blogsModel } from "../model/blogsModel.js";
import { uploadFile } from "../utils/cloudinary.js";

export const getBlogs = async (req, res)  => {
    try {
        const limit = req?.query?.limit || 12
        const page = req?.query?.page || 1
        const skip = (page - 1) * limit;
        let totalPages = 0

        const totalAttendees = await blogsModel.countDocuments();
        totalPages = Math.ceil(totalAttendees / limit)
        
        const result = await blogsModel.find().skip(skip).limit(limit);

        res.status(200).json({status: true, totalPages, blogsData: result})

    } catch (error) {
        console.log(chalk.red(error));
        res.status(500).json({status: false, message: 'Internal Server Error'})
    }
}

export const getBlogData = async (req, res) => {
    try {
        const {blogId} = req.params
        const result = await blogsModel.findById(blogId)

        res.status(200).json({status: true, blogData: result})
    } catch (error) {
        console.log(error)
        res.status(500).json({status: false, message: "Error finding this blog"})
    }
}

export const addBlog = async (req, res) => {
    try {
        const bannerImg  = await uploadFile(req?.files)
        console.log(bannerImg)

        const payload = {
            title: req.body.title,
            content: req.body.content,
            banner: bannerImg.result[0].url
        }

        await blogsModel.create(payload)
        res.status(200).json({status: true, message: 'Blog saved successfully'})

    } catch (error) {
        console.log(chalk.red(error));
        res.status(500).json({status: false, message: 'Internal Server Error'})
    }
}