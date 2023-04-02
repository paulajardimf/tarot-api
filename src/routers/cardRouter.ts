import express from "express";
import { CardBusiness } from "../business/CardBusiness";
import { CardController } from "../controller/CardController";

export const cardRouter = express.Router()

const cardController = new CardController(
  new CardBusiness(
  )
)

cardRouter.get("/", cardController.getAllCards)
cardRouter.get("/arcana/major", cardController.getAllMajorArcanaCards)
cardRouter.get("/arcana/minor", cardController.getAllMinorArcanaCards)
cardRouter.get("/:name", cardController.getCardByName)
cardRouter.get("/id/:id", cardController.getCardById)
cardRouter.get("/:id/image", cardController.getCardImageById)