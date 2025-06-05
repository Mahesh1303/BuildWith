import { Router } from "express";
import { handleUserSignin, handleUserSignup } from "../controllers/userControllers";

export const UserRouter : Router = Router();

UserRouter.post("/user/signup", handleUserSignup as any);
UserRouter.get("/user/signin",handleUserSignin as any)

