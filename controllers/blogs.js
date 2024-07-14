import Blog from "../models/blogs.js";
import { v4 as uuid } from "uuid";
export const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    return res.json(allBlogs);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.send("Invalid Request");
    const blog = await Blog.find({ id: id });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    return res.json(blog);
  } catch (error) {
    req.send("Invalid Request");
  }
};

export const createBlog = async (req, res) => {
  const { title, content, author = "Anonymous" } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newBlog = new Blog({
    id: uuid(),
    title,
    content,
    author,
  });
  try {
    const savedBlog = await newBlog.save();
    return res.json(savedBlog);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const likeBlog = async (req, res) => {
  const { id } = req.body;
  if (!id) return res.send("Invalid Request");
  try {
    const blog = await Blog.findOne({ id: id });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    blog.likes++;
    await blog.save();
    return res.json(blog);
  } catch (error) {}
};
