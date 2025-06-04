import { Request, Response } from "express";

import { Prisma } from "../db";

const handleCreateUser = async (req: Request, res: Response) => {
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

    const newUser = await Prisma.user.create({
      data: {
        username,
        email,
        password,
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
    });
  }
};


export default handleCreateUser;