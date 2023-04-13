import { BaseDatabase } from "../../src/database/BaseDatabase";
import { Arcana, Suit, TCard } from "../../src/types";

export class CardDatabaseMock extends BaseDatabase {
  public static TABLE_CARD = "cards";

  public getAllCards = async (): Promise<TCard[]> => {
    return [
      {
        id: "0",
        number: 0,
        name: "The Fool",
        img: "https://i.imgur.com/1Z1Z1Z1.jpg",
        arcana: Arcana.MAJOR_ARCANA,
        suit: Suit.TRUMP,
      },
      {
        id: "1",
        number: 1,
        name: "The Magician",
        img: "https://i.imgur.com/2Z2Z2Z2.jpg",
        arcana: Arcana.MAJOR_ARCANA,
        suit: Suit.TRUMP,
      },
      {
        id: "2",
        number: 2,
        name: "The High Priestess",
        img: "https://i.imgur.com/3Z3Z3Z3.jpg",
        arcana: Arcana.MAJOR_ARCANA,
        suit: Suit.TRUMP,
      },
    ];
  };
}
