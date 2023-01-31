import express, { Request, Response } from "express";
import { cards } from "../../../../public/database";
import { Arcana } from "../../../../public/types";

export default function MinorArcana(req: Request, res: Response) {
  const card = cards.filter((card) => card.arcana === Arcana.MINOR_ARCANA);

  if (!card) {
    res.status(404).send("Nenhuma carta encontrada");
  } else {
    res.status(200).send(card);
  }
}
