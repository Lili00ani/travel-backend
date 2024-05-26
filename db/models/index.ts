import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize";

import { Travel } from "./Travel";
import { User } from "./User";
import { Country } from "./Country";
import { Place } from "./Place";
import { Tag } from "./Tag";
import { PlaceTag } from "./PlaceTag";

import dotenv from "dotenv";
dotenv.config();

const connection = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.HOST,
  dialect: process.env.DB_DIALECT as Dialect,
  models: [Country, Place, Tag, Travel, User, PlaceTag],
});

export { connection, Country, Place, Tag, Travel, User, PlaceTag };
