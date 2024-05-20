import "dotenv/config";
import express from "express";
import path from "path";
import { viewsRouter } from "./server/routers/views-router.js";
import { postsRouter } from "./server/routers/posts-router.js";
import cors from "cors";

import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app = express();

const PORT = process.env.PORT || 5500;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static(path.resolve(__dirname, "front", "static")));

app.use(viewsRouter);

app.use("/api/posts", postsRouter);
