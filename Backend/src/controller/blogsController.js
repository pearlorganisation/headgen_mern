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

export const addBlog = async (req, res) => {
    try {
        console.log('file', req.files)
        // const bannerImg  = await uploadFile([req?.files])
    } catch (error) {
        console.log(chalk.red(error));
        res.status(500).json({status: false, message: 'Internal Server Error'})
    }
}