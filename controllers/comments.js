import Comment from "../models/comments.js";

export const getComment = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.send("Invalid Request");
  try {
    const comments = await Comment.find({ blogId: id });
    res.send(comments);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const createComment = async (req, res) => {
  const { name = "Anonymous", content } = req.body;
  const { id } = req.params;
  if (!content) return res.send("Invalid Request");
  try {
    const newComment = new Comment({ blogId: id, content, name });
    await newComment.save();
    res.status(201).send(newComment);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
