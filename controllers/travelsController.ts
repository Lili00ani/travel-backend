import { Request, Response } from "express";
import { Travel } from "../db/models/";
import { TravelAttributes } from "../db/models/Travel";

export class TravelsController {
  async getAllTravels(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const output = await Travel.findAll({ where: { owner_id: id } });
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async createTravel(req: Request, res: Response) {
    const { name, start, end, pax, country_code } = req.body;
    try {
      const output = await Travel.create({
        owner_id: "0a750c6d-758e-4113-806d-4061f49edd13",
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
