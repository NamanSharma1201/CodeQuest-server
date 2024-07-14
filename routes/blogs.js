import express from "express";
const blogRouter = new express.Router();
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  likeBlog,
} from "../controllers/blogs.js";

blogRouter.get("/all", getAllBlogs);
blogRouter.patch("/like", likeBlog);
blogRouter.post("/create", createBlog);
blogRouter.get("/:id", getBlogById);

export default blogRouter;
