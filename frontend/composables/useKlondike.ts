import { SUITS } from "~/types/klondike";
import type { Rank, Card } from "~/types/klondike";

export const useKlondike = defineStore("useKlondike", {
  state: () => ({
    deck: [] as Card[], // 52 cards
    fields: [] as Card[][], // 7 columns
    wastes: [] as Card[],
    piles: [] as Card[][], // 4 foundations
    isSelectedWaste: false,
    isSelectedField: false,
    selectedFieldIndex: -1,
    selectedCard: null as Card | null,
  }),
  getters: {
    isGameClear(): boolean {
      return this.piles.every((pile) => pile.length === 13);
    },
  },
  actions: {
    start() {
      this.deck = [];
      const ranks = Array.from({ length: 13 }, (_, rank) => {
        return (rank + 1) as Rank;
      });
      SUITS.forEach((suit) => {
        ranks.forEach((rank) => {
          this.deck.push({ suit, rank, isFaceUp: false });
        });
      });

      // shuffle
      this.deck.sort(() => Math.random() - 0.5);

      // deal
      this.fields = Array.from({ length: 7 }, (_, i) => {
        return this.deck.splice(0, i + 1);
      });
      this.fields.forEach((field) => {
        field[field.length - 1].isFaceUp = true;
      });

      this.wastes = [];
      this.piles = Array.from({ length: 4 }, () => []);

      this.isSelectedWaste = false;
      this.isSelectedField = false;
      this.selectedFieldIndex = -1;
      this.selectedCard = null;
    },
    draw() {
      this.wastes.push(this.deck.pop() as Card);
      this.wastes[this.wastes.length - 1].isFaceUp = true;
    },
    resetDeck() {
      this.deck.push(...this.wastes.reverse());
      this.deck.forEach((card) => {
        card.isFaceUp = false;
      });
      this.wastes = [];
    },
    selectWaste() {
      if (this.wastes.length === 0) {
        return;
      }
      if (this.isSelectedWaste) {
        this.isSelectedWaste = false;
        return;
      }
      if (this.isSelectedField) {
        return;
      }

      this.isSelectedWaste = true;
      this.isSelectedField = false;
      this.selectedFieldIndex = -1;
      this.selectedCard = null;
    },
    selectField(card: Card, index: number) {
      // カードの選択状態によって挙動を変更

      if (this.isSelectedWaste) {
        // waste -> field
        if (this.fields[index].length === 0) {
          // if (this.wastes[this.wastes.length - 1].rank === 13) {
          this.fields[index].push(this.wastes.pop() as Card);
          // }
          this.resetSelected();
          return;
        }
        const waste = this.wastes[this.wastes.length - 1];
        const fieldCard = this.fields[index][this.fields[index].length - 1];
        if (
          this.isSuitMatch(waste, fieldCard) &&
          waste.rank === fieldCard.rank - 1
        ) {
          this.fields[index].push(this.wastes.pop() as Card);
        } else {
          return;
        }
        this.resetSelected();
        return;
      }

      if (this.isSelectedField) {
        // field -> field
        // 移動元と移動先が同じ場合は選択状態を解除する
        if (this.selectedFieldIndex === index) {
          this.resetSelected();
          return;
        }

        // 対象のフィールドが空の場合，Kのみ移動可能
        if (this.fields[index].length === 0) {
          this.fields[index].push(
            ...this.fields[this.selectedFieldIndex].splice(
              this.fields[this.selectedFieldIndex].indexOf(
                this.selectedCard as Card,
              ),
            ),
          );
          if (this.fields[this.selectedFieldIndex].length > 0) {
            this.fields[this.selectedFieldIndex][
              this.fields[this.selectedFieldIndex].length - 1
            ].isFaceUp = true;
          }
          this.resetSelected();
          return;
        }

        const fieldCard = this.fields[index][this.fields[index].length - 1];
        if (
          this.isSuitMatch(this.selectedCard as Card, fieldCard) &&
          this.selectedCard?.rank === fieldCard.rank - 1
        ) {
          // マッチした場合は，選択したカード及び，それ以降のカードを移動する
          this.fields[index].push(
            ...this.fields[this.selectedFieldIndex].splice(
              this.fields[this.selectedFieldIndex].indexOf(
                this.selectedCard as Card,
              ),
            ),
          );

          // 最下段を表にする
          if (this.fields[this.selectedFieldIndex].length > 0) {
            this.fields[this.selectedFieldIndex][
              this.fields[this.selectedFieldIndex].length - 1
            ].isFaceUp = true;
          }

          // 選択状態を解除
          this.resetSelected();
        }
        return;
      }

      // none -> field
      // 裏側のカードの場合は，表になっている最も上のカードを選択する
      if (card === null) {
        return;
      }
      if (!card.isFaceUp) {
        const card = this.fields[index].find((c) => c.isFaceUp);
        this.selectedCard = card || null;
      } else {
        this.selectedCard = card;
      }
      this.isSelectedWaste = false;
      this.isSelectedField = true;
      this.selectedFieldIndex = index;
    },
    selectPile(index: number) {
      if (!this.isSelectedField && !this.isSelectedWaste) {
        return;
      }

      // waste -> pile
      if (this.isSelectedWaste) {
        const waste = this.wastes[this.wastes.length - 1];
        if (this.piles[index].length === 0) {
          if (waste.rank === 1) {
            this.piles[index].push(this.wastes.pop() as Card);
          }
          this.resetSelected();
          return;
        } else {
          const pileCard = this.piles[index][this.piles[index].length - 1];
          if (
            waste.suit === pileCard.suit &&
            waste.rank === pileCard.rank + 1
          ) {
            this.piles[index].push(this.wastes.pop() as Card);
            this.resetSelected();
            return;
          } else {
            return;
          }
        }
      }

      // field -> pile
      // 選択している列の一番下のカードを見る
      const card =
        this.fields[this.selectedFieldIndex][
          this.fields[this.selectedFieldIndex].length - 1
        ];
      if (card === undefined) {
        return;
      }
      if (this.piles[index].length === 0) {
        if (card.rank === 1) {
          this.piles[index].push(
            this.fields[this.selectedFieldIndex].pop() as Card,
          );
          if (this.fields[this.selectedFieldIndex].length > 0) {
            this.fields[this.selectedFieldIndex][
              this.fields[this.selectedFieldIndex].length - 1
            ].isFaceUp = true;
            this.resetSelected();
          }
        }
      } else {
        const pileCard = this.piles[index][this.piles[index].length - 1];
        if (card.suit === pileCard.suit && card.rank === pileCard.rank + 1) {
          this.piles[index].push(
            this.fields[this.selectedFieldIndex].pop() as Card,
          );
          if (this.fields[this.selectedFieldIndex].length > 0) {
            this.fields[this.selectedFieldIndex][
              this.fields[this.selectedFieldIndex].length - 1
            ].isFaceUp = true;
          }
          this.resetSelected();
        }
      }
    },
    isSuitMatch(card1: Card, card2: Card) {
      if (card1.suit === "Spades" || card1.suit === "Clubs") {
        return card2.suit === "Hearts" || card2.suit === "Diamonds";
      } else {
        return card2.suit === "Spades" || card2.suit === "Clubs";
      }
    },
    resetSelected() {
      this.isSelectedWaste = false;
      this.isSelectedField = false;
      this.selectedFieldIndex = -1;
      this.selectedCard = null;
    },
  },
});
