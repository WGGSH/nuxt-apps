import { beforeEach, describe, expect, it } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useMineSweeper } from './useMineSweeper';

const CONSTANTS = {
  fieldY: 9,
  fieldX: 9,
  mineCount: 10,
};

setActivePinia(createPinia());
const mineSweeper = useMineSweeper();

describe('useMineSweeper', () => {
  describe('initialize', () => {
    beforeEach(() => {
      mineSweeper.initialize();
    });

    it('field が初期化される', () => {
      expect(mineSweeper.field).toEqual(
        Array.from({ length: CONSTANTS.fieldY }, () =>
          Array.from({ length: CONSTANTS.fieldX }, () => ({
            isMine: false,
            status: 'hidden',
            mineCount: 0,
          })),
        ),
      );
    });

    it('isGameClear が false', () => {
      expect(mineSweeper.isGameClear).toBe(false);
    });

    it('isFirstClick が true', () => {
      expect(mineSweeper.isFirstClick).toBe(true);
    });
  });

  describe('start', () => {
    describe('旗が立っていない状態で実行すると', () => {
      beforeEach(() => {
        mineSweeper.initialize();
        mineSweeper.field.forEach(row =>
          row.forEach(cell => (cell.status = 'hidden')),
        );

        mineSweeper.mineCount = CONSTANTS.mineCount;
        mineSweeper.start(3, 3);
      });

      it('爆弾の数が正しい', () => {
        const mineCount = mineSweeper.field
          .flat()
          .filter(cell => cell.isMine).length;
        expect(mineCount).toBe(CONSTANTS.mineCount);
      });

      it('クリックした箇所の周りに爆弾がない', () => {
        const mineCount = mineSweeper.field[3][3].mineCount;
        expect(mineCount).toBe(0);
      });
    });
  });

  describe('getMineCount', () => {
    describe('周囲に爆弾がない場合', () => {
      beforeEach(() => {
        mineSweeper.initialize();
        mineSweeper.field.forEach(row =>
          row.forEach(cell => (cell.isMine = false)),
        );
      });

      it('0 が返る', () => {
        const mineCount = mineSweeper.getMineCount(4, 4);
        expect(mineCount).toBe(0);
      });
    });

    describe('周囲に爆弾が1つある場合', () => {
      beforeEach(() => {
        mineSweeper.initialize();
        mineSweeper.field.forEach(row =>
          row.forEach(cell => (cell.isMine = false)),
        );
        mineSweeper.field[3][3].isMine = true;
      });

      it('1 が返る', () => {
        const mineCount = mineSweeper.getMineCount(4, 4);
        expect(mineCount).toBe(1);
      });
    });

    describe('周囲に爆弾が8つある場合', () => {
      beforeEach(() => {
        mineSweeper.initialize();
        mineSweeper.field.forEach(row =>
          row.forEach(cell => (cell.isMine = true)),
        );
        mineSweeper.field[4][4].isMine = false;
      });

      it('8 が返る', () => {
        const mineCount = mineSweeper.getMineCount(4, 4);
        expect(mineCount).toBe(8);
      });
    });
  });

  describe('holdCell', () => {
    describe('ゲームオーバー中の場合', () => {
      beforeEach(() => {
        mineSweeper.isGameOver = true;
        mineSweeper.holdCell(0, 0);
      });

      it('何もしない', () => {
        expect(mineSweeper.field[0][0].status).toBe('hidden');
      });
    });

    describe('ゲームクリア時の場合', () => {
      beforeEach(() => {
        // mineSweeper.isGameClear = true;
        mineSweeper.field.forEach(row =>
          row.forEach(cell => (cell.status = 'revealed')),
        );

        mineSweeper.holdCell(0, 0);
      });

      it('何もしない', () => {
        expect(mineSweeper.field[0][0].status).toBe('revealed');
      });
    });

    describe('ゲーム開始後初回クリックの場合', () => {
      beforeEach(() => {
        mineSweeper.initialize();
        mineSweeper.isFirstClick = true;
        mineSweeper.holdCell(0, 0);
      });

      it('何もしない', () => {
        expect(mineSweeper.field[0][0].status).toBe('hidden');
      });
    });

    describe('すでに開いているセルをクリックした場合', () => {
      beforeEach(() => {
        mineSweeper.initialize();
        mineSweeper.field[0][0].status = 'revealed';
        mineSweeper.holdCell(0, 0);
      });

      it('何もしない', () => {
        expect(mineSweeper.field[0][0].status).toBe('revealed');
      });
    });

    describe('旗が立っているセルをクリックした場合', () => {
      beforeEach(() => {
        mineSweeper.initialize();
        mineSweeper.start(3, 3);
        mineSweeper.field[0][0].status = 'flagged';
        mineSweeper.holdCell(0, 0);
      });

      it('旗を下ろす', () => {
        expect(mineSweeper.field[0][0].status).toBe('hidden');
      });
    });

    describe('旗が立っていないセルをクリックした場合', () => {
      beforeEach(() => {
        mineSweeper.initialize();
        mineSweeper.start(3, 3);
        mineSweeper.holdCell(0, 0);
      });

      it('セルを開く', () => {
        expect(mineSweeper.field[0][0].status).toBe('flagged');
      });
    });
  });

  // describe('clickCell', () => {
  //
  // });

  // describe('revealNeighbors', () => { });
  //
  // describe('setLevel', () => { });
  //
  // describe('getNeighborFlags', () => { });
});
