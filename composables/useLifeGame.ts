export const useLifeGame = defineStore('useLifeGame', {
  state: () => ({
    field: [] as boolean[][],
    fieldSize: 8,
  }),
  actions: {
    start() {
      this.field = Array.from({ length: this.fieldSize }, () =>
        Array.from({ length: this.fieldSize }, () => Math.random() > 0.5),
      );
    },
  },
});
