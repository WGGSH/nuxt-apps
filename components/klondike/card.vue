<template>
  <div>
    <v-card
      v-if="props.card && props.card.isFaceUp"
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
      v-else-if="props.card && !props.card.isFaceUp"
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
  padding-top: 140%;
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-align: center;
  background-color: white;
  border: 2px solid black;
  border-radius: 4px;

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
