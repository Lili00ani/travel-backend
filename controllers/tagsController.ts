import { Request, Response } from "express";
import { Tag } from "../db/models/";
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
    try {
      const output = await Tag.create({
        travel_id: travel_id,
        name: name,
      } as TagAttributes);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteTag(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const tag = await Tag.findByPk(id);
      console.log(tag);
      await Tag?.destroy();
      return res.status(200).json({ success: true, msg: "Tag deleted" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // async deleteAllPlace(req: Request, res: Response) {
  //   const { id } = req.params;
  //   console.log(id);
  //   console.log(req.params);
  //   try {
  //     const places = await Place.findAll({
  //       where: {
  //         travel_id: id,
  //       },
  //     });

  //     await Place.destroy({
  //       where: {
  //         travel_id: id,
  //       },
  //     });
  //     return res.status(200).json({ success: true, msg: "All places deleted" });
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  // async updatePlace(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const { notes, day, idx, start, end } = req.body;
  //   try {
  //     const place = await Place.findByPk(id);
  //     if (!place) {
  //       return res.status(404).json({ error: true, msg: "Place not found" });
  //     }
  //     if (start !== undefined) place.start = start;
  //     if (end !== undefined) place.end = end;
  //     if (notes !== undefined) place.notes = notes;
  //     if (day !== undefined) place.day = day;
  //     if (idx !== undefined) place.idx = idx;
  //     await place.save();
  //     return res.json(place);
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }
}
