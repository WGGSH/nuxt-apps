<template>
  <v-container class="board">
    <mine-sweeper-board
      :field="mineSweeper.field"
      @click-cell="onClickCell"
      @hold-cell="mineSweeper.holdCell"
    />

    <div v-if="mineSweeper.isGameOver">
      Game Over
    </div>
  </v-container>
</template>

<script setup lang="ts">
const mineSweeper = useMineSweeper();

mineSweeper.initialize();

const onClickCell = (y, x) => {
  if (mineSweeper.isFirstClick) {
    mineSweeper.start(y, x);
  }
  mineSweeper.clickCell(y, x);
};
</script>
