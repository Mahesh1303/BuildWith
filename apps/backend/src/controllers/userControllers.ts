import { Request, Response } from "express";

import { Prisma } from "../db";
import { signtoken } from "../utils/jwt";
import { hashPass, verifyPass } from "../utils/manage.password";

export const handleUserSignup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Missing Credentials",
    });
  }

  try {
    const userExist = await Prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        email: true,
      },
    });

    if (userExist) {
      res.status(400).json({
        message: "User With this Email Already exist",
      });
    }
    const hashPwd = await hashPass(password);
    if (!hashPwd) {
      return res.status(400).json({
        message: "unable to save password User signup failed",
      });
    }

    const newUser = await Prisma.user.create({
      data: {
        username,
        email,
        password: String(hashPwd),
      },
    });

    return res.status(200).json({
      message: "user Created Successfully",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to create USer ",
      data: {
        error: error,
      },
    });
  }
};

export const handleUserSignin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Fields are missing ",
      });
    }

    const userExist = await Prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userExist) {
      return res.status(400).json({
        message: "user Doesnt exist",
      });
    }

    if (!userExist.password) {
      return res.status(400).json({
        message: "No password exist for the user ",
      });
    }

    const passcheck = await verifyPass(password, userExist.password);
    if (!passcheck) {
      return res.status(400).json({
        message: "invalid user ",
      });
    }

    const token = signtoken(userExist);

    res.status(200).json({
      message: "User Logged in  Successfully",
      data: {
        ssid: token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "unable to login user",
      data: {
        error: error,
      },
    });
  }
};

export const handleFollowUser = async (req: Request, res: Response) => {
  const { followerId, followingId } = req.body;
  try {
    if (!followerId || !followingId) {
      return res.status(400).json({
        message: "Unable to follow the user ",
      });
    }

    const userExist = await Prisma.user.findFirst({
      where: {
        user_id: followingId,
      },
    });

    if (!userExist) {
      return res.status(400).json({
        message: "user to follow doesnt exist",
      });
    }

    const user = await Prisma.user.findFirst({
      where: {
        user_id: followerId,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "User doesnt exist ",
      });
    }

    const followExist = await Prisma.follow.findFirst({
      where: {
        followerId: followerId,
        followingId: followingId,
      },
    });

    if (followExist) {
      await Prisma.follow.deleteMany({
        where: {
          followerId: followerId,
          followingId: followingId,
        },
      });

      return res.status(200).json({
        message: "user unfollowed Successfully",
        data: { followerId: followerId, followingId: followingId },
      });
    } else {
      await Prisma.follow.create({
        data: {
          followerId: followerId,
          followingId: followingId,
        },
      });

      return res.status(200).json({
        message: "User following Successfully",
        data: {
          follower: followerId,
          following: followingId,
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Unable to follow the user ",
      error: {
        error: error,
      },
    });
  }
};
