<template>
  <div>
    <div
      v-if="props.bundle.length"
      class="card-bundle"
    >
      <klondike-card
        v-for="(card, index) in props.bundle"
        :key="card.id"
        :card="card"
        :is-face-up="index === props.bundle.length - 1"
        class="cardeee"
        :elevation="index === props.bundle.length - 1 ? 10 : 0"
        :style="{
          top: `${index * 0.5}rem`,
        }"
      />
    </div>
    <div
      v-else
      class="card-bundle"
    >
      <klondike-card
        :card="null"
        :is-face-up="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Card } from '~/types/klondike';

const props = defineProps<{
  bundle: Card[];
}>();

</script>

<style scoped lang="scss">
.card-bundle {
  position: relative;
  height: 150px;

  .cardeee {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
