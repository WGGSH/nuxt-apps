<template>
  <v-container>
    <life-game-field :field="field" @on-click-cell="clickCell" />

    <v-divider class="ma-4" />

    <v-btn class="ma-2" @click="lifeGame.next()"> next </v-btn>
    <v-btn class="ma-2" @click="lifeGame.start()"> reset </v-btn>
    <v-btn class="ma-2" @click="toggleAuto">
      {{ isAuto ? 'stop' : 'auto' }}
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const lifeGame = useLifeGame();

const field = computed(() => lifeGame.field);

const clickCell = (y: number, x: number) => {
  lifeGame.toggleCell(y, x);
};

const isAuto = ref(false);
const autoFunc = ref<ReturnType<typeof setInterval> | null>(null);

const toggleAuto = () => {
  isAuto.value = !isAuto.value;
  if (isAuto.value) {
    autoFunc.value = setInterval(() => {
      lifeGame.next();
    }, 500);
  } else {
    clearInterval(autoFunc.value);
  }
};

lifeGame.start();
</script>
