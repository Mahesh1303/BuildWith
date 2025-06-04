import express from "express";
import { UserRouter } from "./routes/userRoutes";
const app = express();

export default app;

app.use(UserRouter)
