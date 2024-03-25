<template>
  <v-container class="board">
    <mine-sweeper-board :field="mineSweeper.field" />
  </v-container>
</template>

<script setup lang="ts">
const mineSweeper = useMineSweeper();

mineSweeper.start();
</script>
