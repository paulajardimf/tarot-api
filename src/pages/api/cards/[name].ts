import { Request, Response } from "express";
import { cards } from "../../../../public/database";

export default function Name(req: Request, res: Response) {
  const name = req.query.name as string;

  const card = cards.filter((card) =>
    card.name.includes(name)
  );

  if (!card) {
    res.status(404).send("Carta não encontrada");
  } else {
    res.status(200).send(card);
  }
}