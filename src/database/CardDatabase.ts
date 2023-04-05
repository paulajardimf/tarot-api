import { BaseDatabase } from "./BaseDatabase";

export class CardDatabase extends BaseDatabase {
  public static TABLE_CARDS = "cards";

  public async getAllCards() {
    const cardsDB = await BaseDatabase.connection(
      CardDatabase.TABLE_CARDS
    ).select();
    return cardsDB;
  }

  public async getAllMajorArcanaCards() {
    const majorCards = await BaseDatabase.connection(
      CardDatabase.TABLE_CARDS
    ).where({ arcana: "Major Arcana" });
    return majorCards;
  }

  public async getAllMinorArcanaCards() {
    const minorCards = await BaseDatabase.connection(
      CardDatabase.TABLE_CARDS
    ).where({ arcana: "Minor Arcana" });
    return minorCards;
  }

  public async getCardByName(name: string) {
    const card = await BaseDatabase.connection(CardDatabase.TABLE_CARDS).where({
      name,
    });
    return card;
  }

  public async getCardById(id: string) {
    const card = await BaseDatabase
      .connection(CardDatabase.TABLE_CARDS)
      .where({ id });
    return card;
  }

  public async getCardImageById(id: string) {
    const card = await BaseDatabase
      .connection(CardDatabase.TABLE_CARDS)
      .where({ id })
      .select('img')
      .first();
    return card?.img ?? null;
  }
}
