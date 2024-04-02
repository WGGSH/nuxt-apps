export const useLightsOut = defineStore('useLightsOut', {
  state: () => ({
    field: [] as boolean[][],
    fieldY: 5,
    fieldX: 5,
  }),
  getters: {
    isGameClear(): boolean {
      return this.field.flat().every(cell => !cell);
    },
  },
  actions: {
    initialize() {
      this.field = Array.from({ length: this.fieldY }, () =>
        Array.from({ length: this.fieldX }, () => false),
      );
    },
    start() {
      this.field.forEach((row, y) =>
        row.forEach((_, x) => {
          if (Math.random() < 0.5) {
            this.toggle(y, x);
          }
        }),
      );
    },
    toggle(y: number, x: number) {
      this.field[y][x] = !this.field[y][x];
      if (y > 0) { this.field[y - 1][x] = !this.field[y - 1][x]; }
      if (y < this.fieldY - 1) { this.field[y + 1][x] = !this.field[y + 1][x]; }
      if (x > 0) { this.field[y][x - 1] = !this.field[y][x - 1]; }
      if (x < this.fieldX - 1) { this.field[y][x + 1] = !this.field[y][x + 1]; }
    },
  },
});
