import { LightsOutSolver } from '~/scripts/lights-out-solver';

export const useLightsOut = defineStore('useLightsOut', {
  state: () => ({
    field: [] as boolean[][],
    startField: [] as boolean[][],
    fieldY: 5,
    fieldX: 5,
    clickCount: 0,
    isShowAnswer: false,
  }),
  getters: {
    isGameClear(): boolean {
      return this.field.flat().every((cell) => !cell);
    },
    shortestField(): boolean[][] {
      const field = this.startField.map((row) => row.slice());
      const shortestField = Array.from({ length: this.fieldY }, () =>
        Array.from({ length: this.fieldX }, () => false),
      );
      field.forEach((row, y) =>
        row.forEach((_, x) => {
          let sum = 0;
          LightsOutSolver.answer[y][x].forEach(([ay, ax]) => {
            if (field[ay][ax]) {
              sum++;
            }
          });
          shortestField[y][x] = sum % 2 === 1;
        }),
      );
      return shortestField;
    },
    shortestCount(): number {
      return this.shortestField.flat().filter((cell) => cell).length;
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
      this.startField = this.field.map((row) => row.slice());
      this.clickCount = 0;
      this.isShowAnswer = false;
    },
    restart() {
      this.field = this.startField.map((row) => row.slice());
      this.clickCount = 0;
      this.isShowAnswer = false;
    },
    toggle(y: number, x: number) {
      this.clickCount++;
      this.field[y][x] = !this.field[y][x];
      if (y > 0) {
        this.field[y - 1][x] = !this.field[y - 1][x];
      }
      if (y < this.fieldY - 1) {
        this.field[y + 1][x] = !this.field[y + 1][x];
      }
      if (x > 0) {
        this.field[y][x - 1] = !this.field[y][x - 1];
      }
      if (x < this.fieldX - 1) {
        this.field[y][x + 1] = !this.field[y][x + 1];
      }
    },
    showAnswer() {
      this.restart();
      this.isShowAnswer = true;
    },
  },
});
