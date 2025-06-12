import { Router } from "express";
import { handleCreatePost, handleDeletePost, handleLikePost,handleGetPost } from "../controllers/postController";

const PostRoutes = Router()


PostRoutes.post('/post/create',handleCreatePost as any)
PostRoutes.post('/post/like',handleLikePost as any)
PostRoutes.delete('/post/create',handleDeletePost as any)
PostRoutes.get('/post/get',handleGetPost as any)