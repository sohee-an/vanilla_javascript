// fileDb.js
import fs from "fs";
import path from "path";

const dbFilePath = path.resolve("database.json");

const readDb = () => {
  const data = fs.readFileSync(dbFilePath);
  return JSON.parse(data);
};

const writeDb = (data) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

export { readDb, writeDb };
