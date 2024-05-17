import cors from "cors";
import express from "express";

import viewsRouter from "./routers/views-router";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(viewsRouter);

export { app };
