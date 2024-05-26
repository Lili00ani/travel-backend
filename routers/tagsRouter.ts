import { Router } from "express";
import { TagsController } from "../controllers/tagsController";

const tagsController = new TagsController();

export class TagsRouter {
  routes() {
    const router = Router();
    router.get("/all", tagsController.getAllTags);
    router.post("/:placeId", tagsController.createTag);
    router.delete("/all/:id", tagsController.deleteAllTags);
    router.delete("/:placeId/:tagId", tagsController.deleteTag);
    router.put("/:tagId", tagsController.updateTag);
    return router;
  }
}
