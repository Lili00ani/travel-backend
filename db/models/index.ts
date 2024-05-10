import { Sequelize } from "sequelize-typescript";
import { Travel } from "./Travel";
import { User } from "./User";
import dotenv from "dotenv";
import { Dialect } from "sequelize";
dotenv.config();

const connection = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.HOST,
  dialect: process.env.DB_DIALECT as Dialect,
  models: [Travel, User],
});

export { connection, Travel, User };
