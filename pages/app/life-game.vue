<template>
  <v-container>
    <life-game-field :field="field" />
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const lifeGame = useLifeGame();

const field = computed(() => lifeGame.field);

// const start = () => {
//   lifeGame.start();
// };

lifeGame.start();

</script>
