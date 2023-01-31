import { Request, Response } from "express";
import { cards } from "public/database";

export default function Id(req: Request, res: Response) {
  const id = req.query.id as string;

  const card = cards.find((card) => card.id === id);
  
  if (!card) {
    res.status(404).send("Carta não encontrada");
  } else {
    res.status(200).send(card);
  }
}