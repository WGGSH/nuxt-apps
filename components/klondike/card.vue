<template>
  <div>
    <v-card
      v-if="props.card && props.isFaceUp"
      width="100%"
      class="card"
      :elevation="props.elevation || 24"
      :class="{
        'color-red': props.card.suit === 'Hearts' || props.card.suit === 'Diamonds',
      }"
      @click="onClick"
    >
      <div class="text">
        <v-card-text class="pa-0">
          {{ suitSymbol }}
        </v-card-text>
        <v-card-text class="pa-0">
          {{ props.card.rank }}
        </v-card-text>
      </div>
    </v-card>
    <v-card
      v-else-if="props.card && !props.isFaceUp"
      width="100%"
      class="card is-face-down"
      :elevation="props.elevation || 24"
      @click="onClick"
    />
    <v-card
      v-else
      width="100%"
      class="card is-null"
      elevation="0"
      @click="onClick"
    />
  </div>
</template>

<script setup lang="ts">
import type { Card } from '~/types/klondike';

const suitSymbol = computed(() => {
  switch (props.card?.suit) {
    case 'Spades':
      return '♠';
    case 'Hearts':
      return '♥';
    case 'Diamonds':
      return '♦';
    case 'Clubs':
      return '♣';
    default:
      return '';
  }
});

const props = defineProps<{
  card: Card | null;
  isFaceUp: boolean;
  elevation?: number;
}>();

const emit = defineEmits<{
  click:() => void;
}>();

const onClick = () => {
  emit('click');
};

</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 4px;
  border: 2px solid black;
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding-top: 140%;

  .text {
    position: absolute;
    top: 0;
  }

  &.color-red {
    color: red;
  }

  &.is-face-down {
    background-color: rgb(var(--v-theme-primary));
  }

  &.is-null {
    background-color: transparent;
  }
}
</style>
