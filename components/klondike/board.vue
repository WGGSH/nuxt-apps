<template>
  <div>
    <div class="row">
      <!-- Deck -->
      <div class="col">
        <klondike-card
          v-if="props.deck.length"
          :card="props.deck[props.deck.length - 1]"
          :is-face-up="false"
          @click="onDeckClick"
        />
        <klondike-card
          v-else
          :card="null"
          :is-face-up="false"
          @click="onEmptyDeckClick"
        />
      </div>

      <!-- Waste -->
      <div class="col waste">
        <klondike-card
          v-if="props.wastes.length"
          :card="props.wastes[props.wastes.length - 1]"
          :is-face-up="true"
          @click="onWasteClick"
        />
        <klondike-card
          v-else
          :card="null"
          :is-face-up="false"
          @click="onEmptyWasteClick"
        />
      </div>

      <!-- Piles -->
      <div
        v-for="(pile, index) in props.piles"
        class="col"
      >
        <klondike-card
          v-if="pile.length"
          :card="pile[pile.length - 1]"
          :is-face-up="true"
          @click="() => onPileClick(pile)"
        />
        <klondike-card
          v-else
          :card="null"
          :is-face-up="false"
          @click="() => onEmptyPileClick(pile)"
        />
      </div>
    </div>
    <div class="row">
      <!-- Fields -->
      <div
        v-for="(field, index) in props.fields"
        :key="index"
        class="col"
      >
        <klondike-card-bundle
          :bundle="field"
        />
        <!-- <klondike-card -->
        <!--   v-if="field.length" -->
        <!--   :card="field[field.length - 1]" -->
        <!--   :is-face-up="field[field.length - 1].isFaceUp" -->
        <!--   @click="() => onFieldClick(field)" -->
        <!-- /> -->
        <!-- <klondike-card -->
        <!--   v-else -->
        <!--   :card="null" -->
        <!--   :is-face-up="false" -->
        <!--   @click="() => onEmptyFieldClick(field)" -->
        <!-- /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Card } from '~/types/klondike';

const props = defineProps<{
  deck: Card[];
  fields: Card[][];
  wastes: Card[];
  piles: Card[][];
}>();

const emit = defineEmits<{
  deckClick:(card: Card) => void;
  emptyDeckClick: () => void;
}>();

const onDeckClick = () => {
  emit('deckClick');
};

const onEmptyDeckClick = () => {
  emit('emptyDeckClick');
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  justify-content: space-between;

  >.col {
    width: calc(100vw / 7 - 8px);
    min-width: 20px;
    max-width: calc(100vw / 7);
    margin: 16px 0;
  }

  >.waste {
    margin-right: calc(100vw / 7);
  }
}
</style>
