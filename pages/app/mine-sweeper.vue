<template>
  <v-container class="board">
    <mine-sweeper-board
      :field="mineSweeper.field"
      :is-game-over="mineSweeper.isGameOver"
      :is-game-clear="mineSweeper.isGameClear"
      @click-cell="onClickCell"
      @hold-cell="mineSweeper.holdCell"
    />

    <div>
      {{ lastMineCount }} / {{ totalMineCount }}
    </div>

    <div v-if="mineSweeper.isGameOver">
      Game Over
    </div>

    <div v-else-if="mineSweeper.isGameClear">
      Game Clear
    </div>

    <v-btn @click="mineSweeper.initialize">
      Restart
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
const mineSweeper = useMineSweeper();
const totalMineCount = computed(() => mineSweeper.mineCount);
const lastMineCount = computed(() => mineSweeper.lastMineCount);

mineSweeper.initialize();

const onClickCell = (y, x) => {
  if (mineSweeper.isFirstClick) {
    mineSweeper.start(y, x);
  }
  mineSweeper.clickCell(y, x);
};
</script>
