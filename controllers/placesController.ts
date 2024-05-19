import { Request, Response } from "express";
import { Place } from "../db/models/";
import { PlaceAttributes } from "../db/models/Place";
import { Op } from "sequelize";

export class PlacesController {
  async getAllPlaces(req: Request, res: Response) {
    const id = req.query.id as string;
    console.log("req", req.query);
    try {
      const output = await Place.findAll({ where: { travel_id: id } });
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

      if (places.length === 0) {
        return res.status(404).json({
          success: false,
          msg: "No places found for the given travel_id",
        });
      }

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

  async getUnassignedPlaces(req: Request, res: Response) {
    const travelId = req.query.id as string;
    try {
      const unassignedPlaces = await Place.findAll({
        where: {
          travel_id: travelId,
          day: 0,
        },
      });
      return res.json(unassignedPlaces);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
