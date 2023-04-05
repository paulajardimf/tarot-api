import { Arcana, TCard } from "../types";
import { Card } from "../models/Card";
import path from "path";
import { CardDatabase } from "../database/CardDatabase";

export class CardBusiness {
  constructor(private cardDatabase: CardDatabase) {}

  public getAllCards = async () => {
    const cardsDatabase = await this.cardDatabase.getAllCards();

    const cards = cardsDatabase.map((cardDB) => {
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

  public getAllAleatoryCards = async () => {
    const cardsDB = await this.cardDatabase.getAllCards();

    function shuffleCards(array: any) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const aleatoryCards = shuffleCards(cardsDB);

    const cards = aleatoryCards.map((cardDB: TCard) => {
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
    const majorCards = await this.cardDatabase.getAllMajorArcanaCards();

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

  public getAllAleatoryMajorArcanaCards = async () => {
    const cardsDB = await this.cardDatabase.getAllMajorArcanaCards();

    function shuffleCards(array: any) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const aleatoryCards = shuffleCards(cardsDB);

    const cards = aleatoryCards.map((cardDB: TCard) => {
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
    const minorCards = await this.cardDatabase.getAllMinorArcanaCards();

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

  public getAllAleatoryMinorArcanaCards = async () => {
    const cardsDB = await this.cardDatabase.getAllMinorArcanaCards();

    function shuffleCards(array: any) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const aleatoryCards = shuffleCards(cardsDB);

    const cards = aleatoryCards.map((cardDB: TCard) => {
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

    const cardDB = await this.cardDatabase.getCardByName(name);

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
    const card = await this.cardDatabase.getCardById(id);

    if (!card) {
      throw new Error("Carta não encontrada");
    } else {
      return card;
    }
  };

  public getCardImageById = async (id: string) => {
    const cardImg = await this.cardDatabase.getCardImageById(id);    

    if (!cardImg) {
      throw new Error("Carta não encontrada");
    }

    const imgPath = path.join(__dirname,`../public/images/${cardImg}`);

    return imgPath;
  };
}
