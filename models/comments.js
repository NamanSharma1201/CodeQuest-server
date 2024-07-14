import mongoose, { connect } from "mongoose";

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    defaultValue: "anonymous",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  blogId: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
