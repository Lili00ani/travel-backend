import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connection } from "./db/models";

import { TravelsRouter } from "./routers/travelsRouter";
import { UsersRouter } from "./routers/usersRouter";
import { CountriesRouter } from "./routers/countriesRouter";
import { PlacesRouter } from "./routers/placesRouter";
import { ItinerariesRouter } from "./routers/itinerariesRouter";
import { auth } from "express-oauth2-jwt-bearer";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

const travelsRouter = new TravelsRouter().routes();
const usersRouter = new UsersRouter().routes();
const countriesRouter = new CountriesRouter().routes();
const placesRouter = new PlacesRouter().routes();
const itinerariesRouter = new ItinerariesRouter().routes();

app.use(cors());
app.use(express.json());

const jwtCheck = auth({
  audience: "https://travel/api",
  issuerBaseURL: "https://dev-f7k2kflazqjijb46.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

(async () => {
  try {
    await connection.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.use("/travel", jwtCheck, travelsRouter);
// app.post("/travel", checkJwt, travelsRouter);
app.use("/users", jwtCheck, usersRouter);
app.use("/countries", countriesRouter);
app.use("/place", placesRouter);
app.use("/itineraries", jwtCheck, itinerariesRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
