import { Request, Response } from "express";
import { Itinerary } from "../db/models/";
import { ItineraryAttributes } from "../db/models/Itinerary";

export class ItinerariesController {
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const output = await Itinerary.findByPk(id);
      console.log("output", output);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
