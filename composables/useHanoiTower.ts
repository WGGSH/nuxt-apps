export const useHanoiTower = defineStore('useHanoiTower', {
  state: () => ({
    towers: [] as number[][],
    diskCount: 3,
    selectedDisk: null as number | null,
  }),
  getters: {
    isClear(): boolean {
      return this.towers[2].length === this.diskCount;
    },
  },
  actions: {
    start(diskCount: number) {
      this.diskCount = diskCount;
      this.towers = [
        Array.from({ length: this.diskCount }, (_, i) => i + 1),
        [],
        [],
      ];
      this.selectedDisk = null;
    },
    removeDisk(towerIndex: number) {
      if (this.selectedDisk !== null) { return; }
      if (this.towers[towerIndex].length === 0) { return; }
      this.selectedDisk = this.towers[towerIndex].shift() as number;
    },
    insertDisk(towerIndex: number) {
      if (this.selectedDisk === null) { return; }
      const tower = this.towers[towerIndex];
      if (tower.length === 0 || tower[0] > this.selectedDisk) {
        tower.unshift(this.selectedDisk);
        this.selectedDisk = null;
      }
    },
  },
});
