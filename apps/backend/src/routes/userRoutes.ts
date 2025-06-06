import { Router } from "express";
import { handleFollowUser, handleUserSignin, handleUserSignup } from "../controllers/userControllers";

export const UserRouter : Router = Router();

UserRouter.post("/user/signup", handleUserSignup as any);
UserRouter.get("/user/signin",handleUserSignin as any)
UserRouter.post("/user/signin",handleFollowUser as any)


