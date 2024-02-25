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

export interface Cards {
  cards: card
}

// export interface Hand {
//   cards: Card,
//   score: number
// }
