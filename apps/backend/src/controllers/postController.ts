import { json, Request, Response } from "express";
import { Prisma } from "../db";

export const handleCreatePost = async (req: Request, res: Response) => {
  const { user_id, content, media } = req.body;

  if (!user_id || !content) {
    res.status(400).json({
      message: "invalid credentials",
    });
  }

  try {
    const newpost = await Prisma.post.create({
      data: {
        authorId: user_id,
        content: content,
        media: media,
      },
    });

    return res.status(200).json({
      message: "post create successfully",
      data: {
        CONTENT: {
          postid: newpost.post_id,
          createdAt: newpost.createdAt,
        },
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while creating the post ",
      data: {
        error: error,
      },
    });
  }
};
