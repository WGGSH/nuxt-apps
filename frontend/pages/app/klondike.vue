<template>
  <v-container class="pa-0">
    <v-container class="board" :style="{ 'background-color': boardColor }">
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
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-btn @click="klondike.start()"> Reset </v-btn>
        </v-col>
        <v-col>
          {{ klondike.isGameClear ? 'Game Clear!' : '' }}
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import tinyColor from 'tinycolor2';
const klondike = useKlondike();

const deck = computed(() => klondike.deck);
const fields = computed(() => klondike.fields);
const wastes = computed(() => klondike.wastes);
const piles = computed(() => klondike.piles);
const selectedFieldIndex = computed(() => klondike.selectedFieldIndex);
const selectedCard = computed(() => klondike.selectedCard);
const isSelectedField = computed(() => klondike.isSelectedField);
const isSelectedWaste = computed(() => klondike.isSelectedWaste);

const theme = useTheme();

const boardColor = computed(() => {
  if (theme.currentTheme.dark) {
    return tinyColor(theme.currentTheme.colors.primary).darken(40).toString();
  } else {
    return tinyColor(theme.currentTheme.colors.primary).lighten(40).toString();
  }
});

klondike.start();
</script>
