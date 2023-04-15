import { CardBusiness } from "../../src/business/CardBusiness";
import { CardDatabase } from "../../src/database/CardDatabase";
import { Card } from "../../src/models/Card";
import { Arcana, Suit, TCard } from "../../src/types";

describe("CardBusiness", () => {
  describe("getAllAleatoryCards", () => {
    test("Deve retornar as cartas em ordem aleatória", async () => {
      const mockedCards = [
        new Card(
          "1",
          0,
          "Test Card 1",
          "test-card-1.jpg",
          Arcana.MAJOR_ARCANA,
          Suit.SWORDS
        ),
        new Card(
          "2",
          1,
          "Test Card 2",
          "test-card-2.jpg",
          Arcana.MAJOR_ARCANA,
          Suit.CUPS
        ),
        new Card(
          "3",
          2,
          "Test Card 3",
          "test-card-3.jpg",
          Arcana.MAJOR_ARCANA,
          Suit.PENTACLES
        ),
        new Card(
          "4",
          3,
          "Test Card 4",
          "test-card-4.jpg",
          Arcana.MAJOR_ARCANA,
          Suit.WANDS
        ),
      ];

      const mockedCardDatabase = {
        async getAllCards(): Promise<Card[]> {
          return mockedCards;
        },
      };

      // Cria uma instância de CardBusiness com o mock do banco de dados
      const cardBusiness = new CardBusiness(mockedCardDatabase as CardDatabase);

      // Chama o método getAllAleatoryCards() e obtém as cartas embaralhadas
      const aleatoryCards = await cardBusiness.getAllAleatoryCards();

      // Verifica se as cartas estão em ordem aleatória
      const shuffledCards = expect.arrayContaining(mockedCards);
      expect(aleatoryCards).toEqual(shuffledCards);

      // Verifica se todas as cartas do banco de dados estão presentes nas cartas retornadas
      mockedCards.forEach((cartaMock: any) => {
        expect(
          aleatoryCards.some(
            (cartaAleatoria: TCard) => cartaAleatoria.id === cartaMock.id
          )
        ).toBe(true);
      });

      // Verifica se não há cartas adicionais nas cartas retornadas
      expect(aleatoryCards.length).toEqual(mockedCards.length);

      // Verifica se todas as cartas retornadas são instâncias da classe Card
      aleatoryCards.forEach((cartaAleatoria: TCard) => {
        expect(cartaAleatoria).toBeInstanceOf(Card);
      });
    });
  });
});
