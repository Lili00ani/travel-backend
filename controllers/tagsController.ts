import { Request, Response } from "express";
import { Tag, PlaceTag } from "../db/models/";
import { TagAttributes } from "../db/models/Tag";

export class TagsController {
  async getAllTags(req: Request, res: Response) {
    const id = req.query.id as string;
    console.log("req", req.query);
    try {
      const output = await Tag.findAll({ where: { travel_id: id } });
      console.log("output", output);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async createTag(req: Request, res: Response) {
    const { travel_id, name } = req.body;
    const { placeId } = req.params;
    try {
      let tag = await Tag.findOne({ where: { name, travel_id } });
      if (!tag) {
        tag = await Tag.create({
          travel_id: travel_id,
          name: name,
        } as TagAttributes);
      }

      console.log(placeId);
      console.log(tag.id);

      if (placeId && tag.id) {
        await PlaceTag.create({
          place_id: placeId,
          tag_id: tag.id,
        });
      }

      return res.json(tag);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteTag(req: Request, res: Response) {
    const { placeId, tagId } = req.params;
    try {
      const placeTag = await PlaceTag.findOne({
        where: { place_id: placeId, tag_id: tagId },
      });
      if (!placeTag) {
        return res
          .status(404)
          .json({ error: true, message: "Tag association not found" });
      }
      await placeTag.destroy();
      return res
        .status(200)
        .json({ success: true, msg: "Tag association deleted" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updateTag(req: Request, res: Response) {
    const { tagId } = req.params;
    const { name } = req.body;
    try {
      const tag = await Tag.findByPk(tagId);

      if (!tag) {
        return res.status(404).json({ error: true, message: "Tag not found" });
      }

      tag.name = name;
      await tag.save();

      return res.status(200).json({ success: true, tag });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteAllTags(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);
    console.log(req.params);
    try {
      const tags = await Tag.findAll({
        where: {
          travel_id: id,
        },
      });

      const tagIds = tags.map((tag) => tag.id);

      await PlaceTag.destroy({
        where: {
          tag_id: tagIds,
        },
      });

      await Tag.destroy({
        where: {
          travel_id: id,
        },
      });

      return res.status(200).json({
        success: true,
        msg: "All tags and related PlaceTag rows deleted",
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
