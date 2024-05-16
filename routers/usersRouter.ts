import { Router } from "express";
import { UsersController } from "../controllers/usersController";

const usersController = new UsersController();

export class UsersRouter {
  routes() {
    const router = Router();
    router.post("/", usersController.insertUser);

    return router;
  }
}
