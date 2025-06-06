import { Request, Response } from "express";
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

export const handleLikePost = async (req: Request, res: Response) => {
  const { postId, userId } = req.body;

  try {
    if (!postId || !userId) {
      return res.status(400).json({
        message: "invalid inputs",
      });
    }

    const existingLike = await Prisma.like.findFirst({
      where: {
        postId,
        userId,
      },
    });
    if (existingLike) {
      await Prisma.like.deleteMany({
        where: {
          postId: postId,
          userId: userId,
        },
      });
      return res.status(200).json({
        message: "Post unliked successfully",
      });
    }

    await Prisma.like.create({
      data: {
        userId: userId,
        postId: postId,
      },
    });

    return res.status(200).json({
      message: "post liked Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const handleDeletePost = async (req: Request, res: Response) => {
  const { userId, postId } = req.body;

  try {
    if (!userId || !postId) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const deltepost = await Prisma.post.findFirst({
      where: {
        post_id: postId,
        authorId: userId,
      },
    });

    if (!deltepost) {
      return res.status(400).json({
        message: "No post available for the user",
      });
    }
    await Prisma.post.delete({
      where: {
        post_id: postId,
        authorId: userId,
      },
    });
    return res.status(200).json({
      message: "Post deleted Successfully",
      data: {
        payload: postId,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Unable to delete the post ",
      error: {
        error: error,
      },
    });
  }
};
