import { Request, Response } from "express";
import { Place, Tag } from "../db/models/";
import { PlaceAttributes } from "../db/models/Place";
import { Op } from "sequelize";

export class PlacesController {
  async getAllPlaces(req: Request, res: Response) {
    const id = req.query.id as string;
    console.log("req", req.query);
    try {
      const output = await Place.findAll({
        where: { travel_id: id },
        include: [
          {
            model: Tag,
            through: { attributes: [] },
          },
        ],
        order: [["created_at", "ASC"]],
      });
      console.log("output", output);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async createPlace(req: Request, res: Response) {
    console.log(req.body);
    const { newPlace } = req.body;
    const { travel_id, google_places, lat, lng, notes, name, address } =
      newPlace;
    try {
      const output = await Place.create({
        travel_id: travel_id,
        google_places: google_places,
        lat: lat,
        lng: lng,
        notes: notes,
        name: name,
        address: address,
        day: 0,
        idx: 0,
      } as PlaceAttributes);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const output = await Place.findByPk(id);
      console.log("output", output);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deletePlace(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const place = await Place.findByPk(id);
      console.log(place);
      await place?.$set("tags", []);
      await place?.destroy();
      return res.status(200).json({ success: true, msg: "Place deleted" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteAllPlace(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);
    console.log(req.params);
    try {
      const places = await Place.findAll({
        where: {
          travel_id: id,
        },
      });

      await Place.destroy({
        where: {
          travel_id: id,
        },
      });
      return res.status(200).json({ success: true, msg: "All places deleted" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updatePlace(req: Request, res: Response) {
    const { id } = req.params;
    const { notes, day, idx, start, end } = req.body;
    try {
      const place = await Place.findByPk(id);
      if (!place) {
        return res.status(404).json({ error: true, msg: "Place not found" });
      }
      if (start !== undefined) place.start = start;
      if (end !== undefined) place.end = end;
      if (notes !== undefined) place.notes = notes;
      if (day !== undefined) place.day = day;
      if (idx !== undefined) place.idx = idx;
      await place.save();
      return res.json(place);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
