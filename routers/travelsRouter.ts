import { Router } from "express";
import { TravelsController } from "../controllers/travelsController";

const travelsController = new TravelsController();

export class TravelsRouter {
  routes() {
    const router = Router();
    router.get("/", travelsController.getAllTravels);
    router.post("/", travelsController.createTravel);

    return router;
  }
}
