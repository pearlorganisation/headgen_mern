import express from "express";
import { getBlogs, addBlog, getBlogData, deleteBlog } from "../controller/blogsController.js";
import { verifyTokenMiddleware } from "../middleware/verifyTokenMiddleware.js";
import { upload } from "../utils/multer.js";

const blogsRouter = express.Router()

blogsRouter.route('/').get(getBlogs).post(verifyTokenMiddleware, upload.array('banner'), addBlog)
blogsRouter.route('/:blogId').get(getBlogData).delete(verifyTokenMiddleware, deleteBlog)

export default blogsRouter