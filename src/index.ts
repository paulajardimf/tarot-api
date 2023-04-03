import express from "express";
import cors from "cors";
import { cardRouter } from "./routers/cardRouter";
import { spreadRouter } from "./routers/spreadRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.use("/cards", cardRouter);
app.use("/spreads", spreadRouter);
