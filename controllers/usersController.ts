import { Request, Response } from "express";
import { User } from "../db/models/";

export class UsersController {
  async getAllUser(req: Request, res: Response) {
    // const id = req.params.id;
    try {
      // const output = await Travel.findAll({ where: { owner_id: id } });
      const output = await User.findAll();
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
