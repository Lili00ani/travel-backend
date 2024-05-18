import { Request, Response } from "express";
import { Travel } from "../db/models/";
import { TravelAttributes } from "../db/models/Travel";
import { IsNull } from "sequelize-typescript";

export class TravelsController {
  async getAllTravels(req: Request, res: Response) {
    const id = req.query.id as string;
    console.log("req", req.query);
    try {
      const output = await Travel.findAll({
        where: { owner_id: id },
        order: [["start", "ASC"]],
      });
      // const output = await Travel.findAll();
      console.log("output", output);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async findOne(req: Request, res: Response) {
    const id = req.query.travel as string;
    try {
      const output = await Travel.findByPk(id);
      console.log("output", output);
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async createTravel(req: Request, res: Response) {
    console.log(req.body);
    const { owner_id, name, start, end, pax, country_code } = req.body;
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

  async updateTravel(req: Request, res: Response) {
    const { id } = req.params;
    const { owner_id, name, start, end, pax, country_code } = req.body;
    try {
      const travel = await Travel.findByPk(id);
      travel!.owner_id = owner_id;
      travel!.name = name;
      travel!.start = start;
      travel!.end = end;
      travel!.pax = pax;
      travel!.country_code = country_code;
      await travel!.save();
      return res.json(travel);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async deleteTravel(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const travel = await Travel.findByPk(id);
      await travel?.destroy();
      return res.status(200).json({ success: true, msg: "Travel deleted" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getTravelDuration(req: Request, res: Response) {
    const id = req.query.id as string;
    try {
      const travel = await Travel.findByPk(id);
      if (!travel) {
        return res.status(404).json({ error: true, msg: "Travel not found" });
      }
      const start = new Date(travel.start);
      const end = new Date(travel.end);
      const durationInDays = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      return res.json(durationInDays);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
