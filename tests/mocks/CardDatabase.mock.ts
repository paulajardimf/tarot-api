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
      {
        id: "21",
        number: 1,
        name: "Ace of Cups",
        img: "https://i.imgur.com/4Z4Z4Z4.jpg",
        arcana: Arcana.MINOR_ARCANA,
        suit: Suit.CUPS,
      },
      {
        id: "22",
        number: 2,
        name: "Two of Cups",
        img: "https://i.imgur.com/5Z5Z5Z5.jpg",
        arcana: Arcana.MINOR_ARCANA,
        suit: Suit.CUPS,
      },
      {
        id: "35",
        number: 1,
        name: "Ace of Swords",
        img: "https://i.imgur.com/6Z6Z6Z6.jpg",
        arcana: Arcana.MINOR_ARCANA,
        suit: Suit.SWORDS,
      },
      {
        id: "36",
        number: 2,
        name: "Two of Swords",
        img: "https://i.imgur.com/7Z7Z7Z7.jpg",
        arcana: Arcana.MINOR_ARCANA,
        suit: Suit.SWORDS,
      },
      {
        id: "49",
        number: 1,
        name: "Ace of Wands",
        img: "https://i.imgur.com/8Z8Z8Z8.jpg",
        arcana: Arcana.MINOR_ARCANA,
        suit: Suit.WANDS,
      },
      {
        id: "50",
        number: 2,
        name: "Two of Wands",
        img: "https://i.imgur.com/9Z9Z9Z9.jpg",
        arcana: Arcana.MINOR_ARCANA,
        suit: Suit.WANDS,
      },
      {
        id: "63",
        number: 1,
        name: "Ace of Pentacles",
        img: "https://i.imgur.com/0Z0Z0Z0.jpg",
        arcana: Arcana.MINOR_ARCANA,
        suit: Suit.PENTACLES,
      },
      {
        id: "64",
        number: 2,
        name: "Two of Pentacles",
        img: "https://i.imgur.com/1Z1Z1Z1.jpg",
        arcana: Arcana.MINOR_ARCANA,
        suit: Suit.PENTACLES,
      },
    ];
  };
}
