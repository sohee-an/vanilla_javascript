import "dotenv/config";
import express from "express";
import { viewsRouter } from "./server/routers/views-router.js";
import { postsRouter } from "./server/routers/posts-router.js";
import cors from "cors";
import { readDb } from "./fileDB.js";
import { fileURLToPath } from "url"; // 👈 추가

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app = express();
// .env 파일에 예를 들어 PORT="3000" 을 작성하면, process.env.PORT가 3000이 됨
const PORT = process.env.PORT || 5500;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(viewsRouter);

app.use("/api/posts", postsRouter);
