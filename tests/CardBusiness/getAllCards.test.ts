import { CardBusiness } from "../../src/business/CardBusiness";
import { Card } from "../../src/models/Card";
import { Arcana, Suit } from "../../src/types";

describe("getAllCards", () => {
  test("should return an array of Card instances", async () => {
    // Criando um mock para a classe CardDatabase
    const mockCardDatabase = {
      getAllCards: jest.fn(() => [
        {
          id: "1",
          number: 0,
          name: "Test Card",
          img: "test-card.jpg",
          arcana: Arcana.MAJOR_ARCANA,
          suit: Suit.TRUMP,
        },
      ]),
    };

    // Criando uma instância do CardBusiness com o mock
    const cardBusiness = new CardBusiness(mockCardDatabase as any);

    // Chamando a função getAllCards
    const cards = await cardBusiness.getAllCards();

    // Verificando se a função getAllCards do mock foi chamada
    expect(mockCardDatabase.getAllCards).toHaveBeenCalled();

    // Verificando se o resultado é um array com instâncias de Card
    expect(cards).toEqual([
      new Card(
        "1",
        0,
        "Test Card",
        "test-card.jpg",
        Arcana.MAJOR_ARCANA,
        Suit.TRUMP
      ),
    ]);
  });
});
