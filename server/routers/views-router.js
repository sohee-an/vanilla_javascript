import express from "express";
import path from "path";

const viewsRouter = express.Router();

viewsRouter.use("/", serveStatic("home"));
