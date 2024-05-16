import { Request, Response } from "express";
import { Place } from "../db/models/";
import { PlaceAttributes } from "../db/models/Place";

export class PlacesController {
  async getAllPlaces(req: Request, res: Response) {
    const id = req.query.id as string;
    console.log("req", req.query);
    try {
      const output = await Place.findAll({ where: { travel_id: id } });
      // const output = await Travel.findAll();
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
    const { travel_id, google_places, notes, name, address } = newPlace;
    try {
      const output = await Place.create({
        travel_id: travel_id,
        google_places: google_places,
        notes: notes,
        name: name,
        address: address,
      } as PlaceAttributes);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
