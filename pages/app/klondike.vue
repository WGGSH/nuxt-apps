<template>
  <v-container class="board">
    <klondike-board
      :deck="deck"
      :fields="fields"
      :wastes="wastes"
      :piles="piles"
      @click-deck="klondike.draw"
      @click-empty-deck="klondike.resetDeck"
      @click-pile="klondike.selectPile"
      @click-waste="klondike.selectWaste"
      @click-bundle-card="klondike.selectField"
    />
    {{ klondike.isSelectedField }}
    {{ klondike.isSelectedWaste }}
    {{ klondike.selectedFieldIndex }}
    {{ klondike.selectedCard }}
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

