import { CardDatabase } from "../database/CardDatabase";
import { Arcana } from "../types";
import { Card } from "../models/Card";
import path from "path";

export class CardBusiness {
  public getAllCards = async () => {
    const cards = CardDatabase.map((cardDB) => {
      const card = new Card(
        cardDB.id,
        cardDB.number,
        cardDB.name,
        cardDB.img,
        cardDB.arcana,
        cardDB.suit
      );
      return card;
    });
    return cards;
  };

  public getAllMajorArcanaCards = async () => {
    const majorCards = CardDatabase.filter(
      (card) => card.arcana === Arcana.MAJOR_ARCANA
    );
    const cards = majorCards.map((cardDB) => {
      const card = new Card(
        cardDB.id,
        cardDB.number,
        cardDB.name,
        cardDB.img,
        cardDB.arcana,
        cardDB.suit
      );
      return card;
    });
    return cards;
  };

  public getAllMinorArcanaCards = async () => {
    const minorCards = CardDatabase.filter(
      (card) => card.arcana === Arcana.MINOR_ARCANA
    );
    const cards = minorCards.map((cardDB) => {
      const card = new Card(
        cardDB.id,
        cardDB.number,
        cardDB.name,
        cardDB.img,
        cardDB.arcana,
        cardDB.suit
      );
      return card;
    });
    return cards;
  };

  public getCardByName = async (name: string) => {
    if (!name) {
      throw new Error("Nome não enviado!");
    }

    const cardDB = CardDatabase.filter((card) => card.name.includes(name));

    if (!cardDB) {
      throw new Error("Carta não encontrada");
    }

    const cards = cardDB.map((cardDB) => {
      const card = new Card(
        cardDB.id,
        cardDB.number,
        cardDB.name,
        cardDB.img,
        cardDB.arcana,
        cardDB.suit
      );
      return card;
    });

    return cards;
  };

  public getCardById = async (id: string) => {
    const card = CardDatabase.find((card) => card.id === id);

    if (!card) {
      throw new Error("Carta não encontrada");
    } else {
      return card;
    }
  };

  public getCardImageById = async (id: string) => {
    const card = CardDatabase.find((card) => card.id === id);

    if (!card) {
      throw new Error("Carta não encontrada");
    }
    const imgPath = path.join(__dirname, `${card.img}`);

    return imgPath;
  };
}
