import { Router } from "express";
import { ItinerariesController } from "../controllers/itinerariesController";

const itinerariesController = new ItinerariesController();

export class ItinerariesRouter {
  routes() {
    const router = Router();
    router.get("/:id", itinerariesController.findOne);

    return router;
  }
}
