<template>
  <v-container class="board">
    <klondike-board
      :deck="deck"
      :fields="fields"
      :wastes="wastes"
      :piles="piles"
      :selected-field-index="selectedFieldIndex"
      :selected-card="selectedCard"
      :is-selected-field="isSelectedField"
      :is-selected-waste="isSelectedWaste"
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
const selectedFieldIndex = computed(() => klondike.selectedFieldIndex);
const selectedCard = computed(() => klondike.selectedCard);
const isSelectedField = computed(() => klondike.isSelectedField);
const isSelectedWaste = computed(() => klondike.isSelectedWaste);

klondike.start();
</script>

<style scoped lang="scss">
.board {
  background-color: rgb(var(--v-theme-secondary));
}
</style>
