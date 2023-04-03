import { Request, Response } from "express";
import { CardBusiness } from "../business/CardBusiness";

export class CardController {
  constructor(private cardsBusiness: CardBusiness) {}

  public getAllCards = async (req: Request, res: Response) => {
    try {
      const cards = await this.cardsBusiness.getAllCards();

      res.status(200).send(cards);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getAllAleatoryCards = async (req: Request, res: Response) => {
    try {
      const cards = await this.cardsBusiness.getAllAleatoryCards();

      res.status(200).send(cards);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getAllMajorArcanaCards = async (req: Request, res: Response) => {
    try {
      const cards = await this.cardsBusiness.getAllMajorArcanaCards();

      res.status(200).send(cards);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getAllAleatoryMajorArcanaCards = async (req: Request, res: Response) => {
    try {
      const cards = await this.cardsBusiness.getAllAleatoryMajorArcanaCards();

      res.status(200).send(cards);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getAllMinorArcanaCards = async (req: Request, res: Response) => {
    try {
      const cards = await this.cardsBusiness.getAllMinorArcanaCards();

      res.status(200).send(cards);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getAllAleatoryMinorArcanaCards = async (req: Request, res: Response) => {
    try {
      const cards = await this.cardsBusiness.getAllAleatoryMinorArcanaCards();

      res.status(200).send(cards);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getCardByName = async (req: Request, res: Response) => {
    try {
      const input = req.query.name as string;

      const output = await this.cardsBusiness.getCardByName(input);

      res.status(200).send(output);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getCardById = async (req: Request, res: Response) => {
    try {
      const input = req.params.id;

      const output = await this.cardsBusiness.getCardById(input);

      res.status(200).send(output);

    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getCardImageById = async (req: Request, res: Response) => {
    try {
      const input = req.params.id;

      const output = await this.cardsBusiness.getCardImageById(input);

      res.status(200).sendFile(output);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
