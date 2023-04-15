import { CardBusiness } from "../../src/business/CardBusiness";
import { CardDatabase } from "../../src/database/CardDatabase";
import { Card } from "../../src/models/Card";
import { Arcana, Suit, TCard } from "../../src/types";

describe("CardBusiness", () => {
  describe("getAllMajorArcanaCards", () => {
    test("Deve retornar apenas cartas do Arcano Maior", async () => {
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
          Arcana.MINOR_ARCANA,
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
        async getAllMajorArcanaCards() {
          return mockedCards.filter((card: any) => card.getArcana === Arcana.MAJOR_ARCANA);
        },
      };
    
      // Cria uma instância de CardBusiness com o mock do banco de dados
      const cardBusiness = new CardBusiness(mockedCardDatabase as CardDatabase);
    
      // Chama o método getAllMajorArcanaCards() e obtém as cartas do Arcano Maior
      const majorCards = await cardBusiness.getAllMajorArcanaCards();
    
      // Verifica se todas as cartas retornadas são do Arcano Maior
      majorCards.forEach((card: any) => {
        expect(card.arcana).toBe(Arcana.MAJOR_ARCANA);
      });
    
      // Verifica se todas as cartas retornadas são instâncias da classe Card
      majorCards.forEach((card: Card) => {
        expect(card).toBeInstanceOf(Card);
      });
    });
  });
});
