export type TCard = {
  number: number
  name: string
  img: string
  arcana: Arcana
  suit: Suit
}

export enum Arcana {
  MAJOR_ARCANA = "Major Arcana",
  MINOR_ARCANA = "Minor Arcana"
}

export enum Suit {
  TRUMP = "Trump",
  CUPS = "Cups",
  SWORDS = "Swords",
  WANDS = "Wands",
  PENTACLES = "Pentacles"
}