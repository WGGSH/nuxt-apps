<template>
  <v-container class="board">
    <mine-sweeper-board
      :field="mineSweeper.field"
      @click-cell="mineSweeper.clickCell"
      @hold-cell="mineSweeper.holdCell"
    />

    <div v-if="mineSweeper.isGameOver">
      Game Over
    </div>
  </v-container>
</template>

<script setup lang="ts">
const mineSweeper = useMineSweeper();

mineSweeper.start();
</script>
