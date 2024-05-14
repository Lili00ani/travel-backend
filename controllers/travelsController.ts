import { Request, Response } from "express";
import { Travel } from "../db/models/";
import { TravelAttributes } from "../db/models/Travel";

export class TravelsController {
  async getAllTravels(req: Request, res: Response) {
    const id = req.query.id as string;
    console.log("req", req.query);
    try {
      const output = await Travel.findAll({ where: { owner_id: id } });
      // const output = await Travel.findAll();
      console.log("output", output);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async createTravel(req: Request, res: Response) {
    const { travel } = req.body;
    const { owner_id, name, start, end, pax, country_code } = travel;
    try {
      const output = await Travel.create({
        owner_id: owner_id,
        name: name,
        start: start,
        end: end,
        pax: pax,
        country_code: country_code,
      } as TravelAttributes);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
