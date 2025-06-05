import { Router } from "express";
import { handleCreatePost } from "../controllers/postController";

const PostRoutes = Router()


PostRoutes.post('/post/create',handleCreatePost as any)