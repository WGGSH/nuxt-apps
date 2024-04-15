export const useLightsOut = defineStore('useLightsOut', {
  state: () => ({
    field: [] as boolean[][],
    startField: [] as boolean[][],
    fieldY: 5,
    fieldX: 5,
    // shortestCount: 0,
    clickCount: 0,
    answer: [
      [
        [],
        [],
        [[1, 0], [2, 0], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [4, 2], [1, 3], [4, 3], [2, 4], [3, 4]],
        [[0, 0], [1, 0], [2, 0], [0, 2], [1, 2], [2, 2], [1, 3], [3, 3], [2, 4], [3, 4], [4, 4]],
        [[0, 0], [2, 0], [3, 0], [0, 2], [2, 2], [3, 2], [0, 3], [4, 3], [1, 4], [2, 4], [4, 4]],
      ],
      [
        [[0, 0]],
        [[2, 0], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [4, 2], [1, 3], [4, 3], [2, 4], [3, 4]],
        [[0, 0], [2, 0], [1, 1], [2, 1], [3, 1], [2, 2], [4, 2], [3, 3], [4, 3], [4, 4]],
        [[2, 0], [1, 1], [2, 1], [3, 1], [0, 2], [3, 2], [4, 2], [0, 3], [3, 3], [1, 4], [2, 4]],
        [[0, 0], [0, 2], [4, 2], [0, 3], [1, 3], [3, 3], [4, 3], [0, 4], [4, 4]],
      ],
      [
        [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [4, 2], [1, 3], [4, 3], [2, 4], [3, 4]],
        [[1, 1], [0, 2], [1, 2], [2, 2], [1, 3], [3, 3], [2, 4], [3, 4], [4, 4]],
        [[1, 0], [2, 0], [4, 0], [0, 1], [4, 1], [0, 2], [2, 2], [3, 2], [2, 3], [0, 4], [1, 4]],
        [[2, 0], [3, 0], [4, 0], [3, 1]],
        [[3, 0], [1, 1], [2, 1], [3, 1], [4, 1], [0, 2], [2, 2], [0, 3], [1, 3], [0, 4]],
      ],
      [
        [[2, 0], [0, 1], [2, 1], [3, 1], [0, 2], [2, 2], [4, 2], [3, 3], [4, 3], [4, 4]],
        [[2, 0], [3, 0], [1, 1], [4, 1], [0, 2], [1, 2], [4, 2], [1, 3], [2, 3], [3, 3], [2, 4]],
        [[0, 0], [0, 2], [0, 3], [1, 3], [0, 4]],
        [[1, 0], [2, 0], [0, 1], [3, 1], [0, 2], [3, 2], [4, 2], [1, 3], [2, 3], [3, 3], [2, 4]],
        [[0, 1], [1, 1], [2, 2], [0, 3], [2, 3], [3, 3], [0, 4], [2, 4]],
      ],
      [
        [[0, 0], [2, 0], [3, 0], [4, 1], [0, 2], [2, 2], [4, 2], [0, 3], [2, 3], [3, 4], [4, 4]],
        [[2, 0], [3, 0], [4, 0], [3, 1], [3, 3], [2, 4], [3, 4], [4, 4]],
        [[0, 0], [2, 0], [3, 0], [4, 0], [1, 1], [3, 1], [1, 2], [2, 2], [0, 3], [1, 3], [1, 4]],
        [[0, 0], [1, 0], [3, 0], [4, 0], [1, 1], [2, 2], [3, 2], [4, 2], [3, 3]],
        [[1, 0], [2, 0], [3, 0], [2, 1], [4, 1], [3, 2], [4, 2], [4, 3]],
      ],
    ],
  }),
  getters: {
    isGameClear(): boolean {
      return this.field.flat().every(cell => !cell);
    },
    fastestField(): boolean[][] {
      const field = this.startField.map(row => row.slice());
      const fastestField = Array.from({ length: this.fieldY }, () =>
        Array.from({ length: this.fieldX }, () => false),
      );
      console.log(this.startField)
      console.log(field)
      field.forEach((row, y) =>
        row.forEach((_, x) => {
          let sum = 0;
          console.log(y, x)
          console.log('-----')
          this.answer[y][x].forEach(([ax, ay]) => {
            console.log(ax, ay, field[ay][ax])
            if (field[ay][ax]) {
              sum++;
            }
          });
          console.log('-----')
          console.log(sum)
          fastestField[y][x] = sum % 2 === 1;
        }),
      );
      return fastestField;
    },
    shortestCount(): number {
      return this.fastestField.flat().filter(cell => cell).length;
      // return this.fastestField.sum(row => row.count(cell => cell));
    }
  },
  actions: {
    initialize() {
      this.field = Array.from({ length: this.fieldY }, () =>
        Array.from({ length: this.fieldX }, () => false),
      );
    },
    start() {
      // const field =[
      //   [1,1,0,1,1],
      //   [1,1,0,1,1],
      //   [0,0,0,1,0],
      //   [1,0,0,1,1],
      //   [0,0,0,1,0],
      // ]
      // this.field = field.map(row => row.map(cell => cell === 1));
      this.field.forEach((row, y) =>
        row.forEach((_, x) => {
          if (Math.random() < 0.5) {
            this.toggle(y, x);
          }
        }),
      );
      this.startField = this.field.map(row => row.slice());
      this.clickCount = 0;
    },
    toggle(y: number, x: number) {
      console.log(y, x)
      this.clickCount++;
      this.field[y][x] = !this.field[y][x];
      if (y > 0) { this.field[y - 1][x] = !this.field[y - 1][x]; }
      if (y < this.fieldY - 1) { this.field[y + 1][x] = !this.field[y + 1][x]; }
      if (x > 0) { this.field[y][x - 1] = !this.field[y][x - 1]; }
      if (x < this.fieldX - 1) { this.field[y][x + 1] = !this.field[y][x + 1]; }
    },
  },
});
