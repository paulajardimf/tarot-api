import { Request, Response } from "express";
import { cards } from "public/database";
import * as path from "path";
import * as fs from "fs";

export default function image(req: Request, res: Response) {
  const id = req.query.id;
  const card = cards.find((card) => card.id === id);
  console.log(card);
  


  if (!card) {
    res.status(404).send("Imagem não encontrada");
  } else {
    const imgPath = path.join(process.cwd(), `public/images/${card.img}`);
    const img = fs.readFileSync(imgPath);
    res.setHeader("Content-Type", "image/jpeg");
    res.status(200).send(img);
  }
}
