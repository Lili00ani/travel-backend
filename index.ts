import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connection } from "./db/models";

import { TravelsRouter } from "./routers/travelsRouter";
import { UsersRouter } from "./routers/usersRouter";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

const travelsRouter = new TravelsRouter().routes();
const usersRouter = new UsersRouter().routes();

app.use(express.json());
app.use(cors());

(async () => {
  try {
    await connection.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.use("/t", travelsRouter);
app.use("/u", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
