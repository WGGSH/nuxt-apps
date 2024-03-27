import type { Cell } from '~/types/mine-sweeper';

export const useMineSweeper = defineStore('useMineSweeper', {
  state: () => ({
    field: [] as Cell[][],
    fieldSize: 16,
    mineCount: 10,
    isGameOver: false,
    isFirstClick: true,
  }),
  getters: {
    lastMineCount(): number {
      return this.mineCount - this.field.flat().filter(cell => cell.status === 'flagged').length;
    },
  },
  actions: {
    initialize() {
      this.field = Array.from({ length: this.fieldSize }, () =>
        Array.from({ length: this.fieldSize }, () => ({
          isMine: false,
          status: 'hidden',
          mineCount: 0,
        })),
      );

      this.isGameOver = false;
      this.isFirstClick = true;
    },
    start(y: number, x: number) {
      // 盤面作成
      this.field.forEach(row =>
        row.forEach((cell) => {
          cell.isMine = false;
          // cell.status = 'hidden';
          cell.mineCount = 0;
        }),
      );

      // 地雷設置
      // 最初にクリックしたセルの周囲に地雷を設置しない
      for (let i = 0; i < this.mineCount; i++) {
        let px, py;
        do {
          px = Math.floor(Math.random() * this.fieldSize);
          py = Math.floor(Math.random() * this.fieldSize);
        } while (
          (px === x && py === y) ||
          this.field[py][px].isMine ||
          (Math.abs(px - x) <= 1 && Math.abs(py - y) <= 1)
        );
        this.field[py][px].isMine = true;
      }

      // 周囲の地雷数を計算
      this.field.forEach((row, y) =>
        row.forEach((cell, x) => {
          cell.mineCount = this.getMineCount(y, x);
        }),
      );

      this.isGameOver = false;
      this.isFirstClick = false;
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
    clickCell(y: number, x: number) {
      if (this.isGameOver) {
        return;
      }

      if (this.field[y][x].status === 'revealed') {
        this.revealNeighbors(y, x);
        return;
      }

      if (this.field[y][x].status === 'flagged') {
        this.field[y][x].status = 'hidden';
        return;
      }

      if (this.field[y][x].isMine) {
        this.isGameOver = true;
        // すべての地雷を表示
        this.field.forEach(row =>
          row.forEach((cell) => {
            if (cell.isMine) {
              cell.status = 'revealed';
            }
          }),
        );
        return;
      }

      this.revealNeighbors(y, x);
    },

    holdCell(y: number, x: number) {
      if (this.isGameOver) {
        return;
      }
      if (this.field[y][x].status === 'revealed') {
        return;
      }
      if (this.field[y][x].status === 'flagged') {
        this.field[y][x].status = 'hidden';
        return;
      }
      this.field[y][x].status = 'flagged';
    },

    revealNeighbors(y: number, x: number) {
      // 周囲の地雷数が0のセルを再帰的に開く
      const cell = this.field[y][x];
      if (cell.isMine || cell.status !== 'hidden') {
        return;
      }

      cell.status = 'revealed';
      if (cell.mineCount > 0) {
        return;
      }

      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const ny = y + dy;
          const nx = x + dx;
          if (ny < 0 || ny >= this.fieldSize || nx < 0 || nx >= this.fieldSize) {
            continue;
          }
          if (ny === y && nx === x) {
            continue;
          }
          this.revealNeighbors(ny, nx);
        }
      }
    },
  },
});
