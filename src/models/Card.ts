import { Arcana, Suit } from '../types';

export class Card {
  constructor(
    private id: string,
    private number: number,
    private name: string,
    private img: string,
    private arcana: Arcana,
    private suit: Suit
  ) {}

  public getId(): string {
    return this.id;
  }
  public setId(value: string): void {
    this.id = value;
  }
  public getNumber(): number {
    return this.number;
  }
  public setNumber(value: number): void {
    this.number = value;
  }
  public getName(): string {
    return this.name;
  }
  public setName(value: string): void {
    this.name = value;
  }
  public getImg(): string {
    return this.img;
  }
  public setImg(value: string): void {
    this.img = value;
  }
  public getArcana(): Arcana {
    return this.arcana;
  }
  public setArcana(value: Arcana): void {
    this.arcana = value;
  }
  public getSuit(): Suit {
    return this.suit;
  }
  public setSuit(value: Suit): void {
    this.suit = value;
  }
}