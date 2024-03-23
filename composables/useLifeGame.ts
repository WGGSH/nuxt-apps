export const useLifeGame = defineStore('useLifeGame', {
  state: () => ({
    field: [] as boolean[][],
    fieldSize: 10,
  }),
  actions: {
    start() {
      this.field = Array.from({ length: this.fieldSize }, () =>
        Array.from({ length: this.fieldSize }, () => false),
      );
    },
    toggleCell(y: number, x: number) {
      this.field[y][x] = !this.field[y][x];
    },
    next() {
      const nextField = Array.from({ length: this.fieldSize }, () =>
        Array.from({ length: this.fieldSize }, () => false),
      );

      for (let y = 0; y < this.fieldSize; y++) {
        for (let x = 0; x < this.fieldSize; x++) {
          const count = this.countAliveNeighbors(y, x);
          if (this.field[y][x]) {
            nextField[y][x] = count === 2 || count === 3;
          } else {
            nextField[y][x] = count === 3;
          }
        }
      }

      this.field = nextField;
    },
    countAliveNeighbors(y: number, x: number) {
      let count = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dy === 0 && dx === 0) {
            continue;
          }
          let ny = y + dy;
          let nx = x + dx;
          if (ny < 0) { ny += this.fieldSize; }
          if (ny >= this.fieldSize) { ny -= this.fieldSize; }
          if (nx < 0) { nx += this.fieldSize; }
          if (nx >= this.fieldSize) { nx -= this.fieldSize; }

          if (this.field[ny][nx]) {
            count++;
          }
        }
      }
      return count;
    },
  },
});
