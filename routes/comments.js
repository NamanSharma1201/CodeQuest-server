import { Router } from "express";
import { getComment, createComment } from "../controllers/comments.js";
const commentRouter = new Router();

commentRouter.get("/:id", getComment);
commentRouter.post("/:id", createComment);
export default commentRouter;
