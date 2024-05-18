import express from "express";

import { readDb } from "../../fileDB.js";
import { fileURLToPath } from "url"; // 👈 추가

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url);

const postsRouter = express.Router();

postsRouter.get("/:userid", (req, res) => {
  const { userid } = req.params;

  const db = readDb();
  const userPosts = db.posts.filter(
    (post) => post.userId === parseInt(userid, 10)
  );

  res.json(userPosts);
});

postsRouter.get("/:userId/:pid", (req, res) => {
  const { pid } = req.params;

  const db = readDb();
  const post = db.posts.find((post) => post.id === parseInt(pid, 10));

  res.json(post);
});
export { postsRouter };
