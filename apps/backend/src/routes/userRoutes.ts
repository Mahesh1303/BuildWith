import { Router } from "express";
import handleCreateUser from "../controllers/userControllers";

export const UserRouter : Router = Router();

UserRouter.post("/user/signup", handleCreateUser as any);

