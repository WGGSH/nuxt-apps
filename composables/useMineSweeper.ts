import type { Cell } from '~/types/mine-sweeper';

export const useMineSweeper = defineStore('useMineSweeper', {
  state: () => ({
    field: [] as Cell[][],
    fieldSize: 8,
    mineCount: 10,
  }),
  actions: {
    start() {
      // 盤面作成
      this.field = Array.from({ length: this.fieldSize }, () =>
        Array.from({ length: this.fieldSize }, () => ({
          isMine: false,
          status: 'hidden',
          mineCount: 0,
        })),
      );

      // 地雷設置
      for (let i = 0; i < this.mineCount; i++) {
        let x, y;
        do {
          x = Math.floor(Math.random() * this.fieldSize);
          y = Math.floor(Math.random() * this.fieldSize);
        } while (this.field[y][x].isMine);
        this.field[y][x].isMine = true;
      }

      // 周囲の地雷数を計算
      this.field.forEach((row, y) =>
        row.forEach((cell, x) => {
          cell.mineCount = this.getMineCount(y, x);
        }),
      );
    },
    getMineCount(y: number, x: number) {
      let count = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const ny = y + dy;
          const nx = x + dx;
          if (ny < 0 || ny >= this.fieldSize || nx < 0 || nx >= this.fieldSize) {
            continue;
          }
          if (this.field[ny][nx].isMine) {
            count++;
          }
        }
      }
      return count;
    },
  },
});
