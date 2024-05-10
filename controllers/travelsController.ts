import { Request, Response } from "express";
import { Travel } from "../db/models/";

export class TravelsController {
  async getAllTravel(req: Request, res: Response) {
    // const id = req.params.id;
    try {
      // const output = await Travel.findAll({ where: { owner_id: id } });
      const output = await Travel.findAll();
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
