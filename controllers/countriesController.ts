import { Request, Response } from "express";
import { Country } from "../db/models/";

export class CountriesController {
  async getAllCountries(req: Request, res: Response) {
    try {
      const output = await Country.findAll();
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
