export interface Card {
  code: string,
  image: string
  images: {
    svg: string,
    png: string
  },
  value: string,
  suit: string
}

export interface Hand {
  cards: Card,
  score: number
}
