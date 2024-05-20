import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // 👈 추가

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url);

const viewsRouter = express.Router();

//서버 이미지를 사용하기 위한 라우터
viewsRouter.use("/uploads", express.static("uploads"));

const clientViewsDirectoryPath = path.join(__dirname, "../../front");

viewsRouter.get("/*", (req, res) => {
  res.sendFile(path.resolve("front", "index.html"));
});
// viewsRouter.get("/home", (req, res) => {
//   res.sendFile(path.join(clientViewsDirectoryPath, "home/home.html"));
// });

// viewsRouter.get("/detail", (req, res) => {
//   res.sendFile(
//     path.join(clientViewsDirectoryPath, "blogDetail/blogDetail.html")
//   );
// });

export { viewsRouter };
