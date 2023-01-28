//estou tentando renderizar a imagem da minha carta, mas não está funcionando

import express, { Request, Response } from "express";
import cors from "cors";
import { cards } from "./database";
import path from "path";
import { Arcana } from "./types";


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

// todas as cartas
app.get('/cards', (req: Request, res: Response) => {
  res.status(200).send(cards)
})

// todas as cartas dos arcanos maiores
app.get('/cards/arcana/major', (req: Request, res: Response) => {
  const card = cards.filter((card) => card.arcana === Arcana.MAJOR_ARCANA);

  if (!card) {
    res.status(404).send("Nenhuma carta encontrada");
  } else {
    res.status(200).send(card);
  }
});

// todas as cartas dos arcanos menores
app.get('/cards/arcana/minor', (req: Request, res: Response) => {
  const card = cards.filter((card) => card.arcana === Arcana.MINOR_ARCANA);

  if (!card) {
    res.status(404).send("Nenhuma carta encontrada");
  } else {
    res.status(200).send(card);
  }
});

// uma carta específica por nome
app.get('/cards/:name', (req: Request, res: Response) => {
  const name = req.params.name;

  const card = cards.filter((card) => card.name.toLowerCase().includes(name.toLowerCase()));

  if (!card) {
    res.status(404).send("Carta não encontrada");
  } else {
    res.status(200).send(card);
  }
});