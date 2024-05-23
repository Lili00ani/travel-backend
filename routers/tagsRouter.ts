import { Router } from "express";
import { TagsController } from "../controllers/tagsController";

const tagsController = new TagsController();

export class TagsRouter {
  routes() {
    const router = Router();
    router.get("/all", tagsController.getAllTags);
    router.post("/", tagsController.createTag);
    router.delete("/all/:id", tagsController.deleteAllTags);
    router.delete("/:id", tagsController.deleteTag);
    return router;
  }
}
