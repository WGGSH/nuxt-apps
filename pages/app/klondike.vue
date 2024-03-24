<template>
  <v-container class="board">
    <klondike-board
      :deck="deck"
      :fields="fields"
      :wastes="wastes"
      :piles="piles"
      @deck-click="klondike.draw"
      @empty-deck-click="klondike.resetDeck"
    />
  </v-container>
</template>

<script setup lang="ts">
const klondike = useKlondike();

const deck = computed(() => klondike.deck);
const fields = computed(() => klondike.fields);
const wastes = computed(() => klondike.wastes);
const piles = computed(() => klondike.piles);

klondike.start();
</script>

<style scoped lang="scss">
.board {
  background-color: rgb(var(--v-theme-secondary));
}
</style>

