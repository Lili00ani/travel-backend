import { Request, Response } from "express";
import { User } from "../db/models/";

export class UsersController {
  async insertUser(req: Request, res: Response) {
    const { email } = req.body;
    try {
      const output = await User.findOrCreate({
        where: { email: email },
      });
      return res.json(output);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
