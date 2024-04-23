<template>
  <div>
    <div v-if="props.bundle.length" class="card-bundle">
      <klondike-card
        v-for="(card, index) in props.bundle"
        :key="card.id"
        :card="card"
        :is-selected="props.isSelected && props.selectedCard === card"
        class="klondike-card"
        :elevation="index === props.bundle.length - 1 ? 10 : 0"
        :style="{
          top: `${index * 1.0}rem`,
        }"
        @click="onClickCard(card)"
      />
    </div>
    <div v-else class="card-bundle">
      <klondike-card
        :card="null"
        :is-face-up="false"
        @click="onClickCard(null)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Card } from '~/types/klondike';

const props = defineProps<{
  bundle: Card[];
  isSelected: boolean;
  selectedCard: Card | null;
}>();

const emit = defineEmits<{
  click: (card: Card) => void;
}>();

const onClickCard = (card: Card) => {
  emit('click', card);
};
</script>

<style scoped lang="scss">
.card-bundle {
  position: relative;
  height: 350px;

  .klondike-card {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
