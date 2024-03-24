import { SUITS } from '~/types/klondike';
import type { Rank, Card } from '~/types/klondike';

export const useKlondike = defineStore('useKlondike', {
  state: () => ({
    deck: [] as Card[], // 52 cards
    fields: [] as Card[][], // 7 columns
    wastes: [] as Card[],
    piles: [] as Card[][], // 4 foundations
  }),
  actions: {
    start() {
      this.deck = [];
      const ranks = Array.from({ length: 13 }, (_, rank) => {
        return rank + 1 as Rank;
      });
      SUITS.forEach((suit) => {
        ranks.forEach((rank) => {
          this.deck.push({ suit, rank });
        });
      });

      // shuffle
      this.deck.sort(() => Math.random() - 0.5);

      // deal
      this.fields = Array.from({ length: 7 }, (_, i) => {
        return this.deck.splice(0, i + 1);
      });

      this.wastes = [];
      this.piles = Array.from({ length: 4 }, () => []);
      console.log(this.deck, this.fields, this.wastes, this.piles);
    },
    draw() {
      this.wastes.push(this.deck.pop());
    },
    resetDeck() {
      this.deck.push(...this.wastes);
      this.wastes = [];
    }
  },
});
