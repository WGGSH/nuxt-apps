<template>
  <div>
    <div class="row">
      <!-- Deck -->
      <div class="col">
        <klondike-card
          v-if="props.deck.length"
          :card="props.deck[props.deck.length - 1]"
          :is-face-up="false"
          @click="onClickDeck"
        />
        <klondike-card
          v-else
          :card="null"
          :is-face-up="false"
          @click="onClickEmptyDeck"
        />
      </div>

      <!-- Waste -->
      <div class="col waste">
        <klondike-card
          v-if="props.wastes.length"
          :card="props.wastes[props.wastes.length - 1]"
          :is-face-up="true"
          :is-selected="props.isSelectedWaste"
          @click="onClickWaste"
        />
        <klondike-card v-else :card="null" :is-face-up="false" />
      </div>

      <!-- Piles -->
      <div v-for="(pile, index) in props.piles" :key="index" class="col">
        <klondike-card
          v-if="pile.length"
          :card="pile[pile.length - 1]"
          @click="onClickPile(index)"
        />
        <klondike-card v-else :card="null" @click="onClickPile(index)" />
      </div>
    </div>
    <div class="row">
      <!-- Fields -->
      <div v-for="(field, index) in props.fields" :key="index" class="col">
        <klondike-card-bundle
          :bundle="field"
          :is-selected="
            props.isSelectedField && props.selectedFieldIndex === index
          "
          :selected-card="props.selectedCard"
          @click="onClickBundleCard($event, index)"
        />
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
  isSelectedField: boolean;
  isSelectedWaste: boolean;
  selectedFieldIndex: number;
  selectedCard: Card | null;
}>();

const emit = defineEmits<{
  clickDeck: (card: Card) => void;
  clickEmptyDeck: () => void;
  clickPile: (index: number) => void;
  clickBundle: (index: number) => void;
  clickWaste: () => void;
  clickBundleCard: (card: Card, index: number) => void;
}>();

const onClickDeck = () => {
  emit('clickDeck');
};

const onClickEmptyDeck = () => {
  emit('clickEmptyDeck');
};

const onClickWaste = () => {
  emit('clickWaste');
};

const onClickPile = (index: number) => {
  emit('clickPile', index);
};

const onClickBundleCard = (card: Card, index: number) => {
  emit('clickBundleCard', card, index);
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  justify-content: space-between;

  > .col {
    width: calc(100vw / 7 - 8px);
    min-width: 20px;
    max-width: calc(100vw / 7);
    margin: 16px 0;
  }

  > .waste {
    margin-right: calc(100vw / 7);
  }
}
</style>
