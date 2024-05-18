import { Router } from "express";
import { TravelsController } from "../controllers/travelsController";

const travelsController = new TravelsController();

export class TravelsRouter {
  routes() {
    const router = Router();
    router.get("/all", travelsController.getAllTravels);
    router.get("/", travelsController.findOne);
    router.post("/", travelsController.createTravel);
    router.put("/:id", travelsController.updateTravel);
    router.delete("/:id", travelsController.deleteTravel);
    router.get("/duration", travelsController.getTravelDuration);

    return router;
  }
}
