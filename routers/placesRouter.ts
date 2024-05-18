import { Router } from "express";
import { PlacesController } from "../controllers/placesController";

const placesController = new PlacesController();

export class PlacesRouter {
  routes() {
    const router = Router();
    router.get("/all", placesController.getAllPlaces);
    router.post("/", placesController.createPlace);
    router.delete("/:id", placesController.deletePlace);

    return router;
  }
}
