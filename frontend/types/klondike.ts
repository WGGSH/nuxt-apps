type Suit = 'Spades' | 'Hearts' | 'Diamonds' | 'Clubs';

type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

type Card = {
  suit: Suit;
  rank: Rank;
  isFaceUp: boolean;
};

const SUITS: Suit[] = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

export type { Suit, Rank, Card };
export { SUITS };
