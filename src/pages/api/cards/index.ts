import express, { Request, Response } from "express";
import { cards } from "../../../../public/database";

export default function Cards(req: Request, res: Response) {
  res.status(200).send(cards);
}
