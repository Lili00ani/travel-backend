import { Router } from "express";
import { CountriesController } from "../controllers/countriesController";

const countriesController = new CountriesController();

export class CountriesRouter {
  routes() {
    const router = Router();
    router.get("/", countriesController.getAllCountries);

    return router;
  }
}
