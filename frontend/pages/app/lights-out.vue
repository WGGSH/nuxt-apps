<template>
  <v-bnt class="lights-out">
    <lights-out-board
      :field="field"
      :shortest-field="shortestField"
      :show-answer="isShowAnswer"
      @on-click-cell="onClickCell"
    />
    <v-btn @click="lightsOut.start()"> new game </v-btn>
    <v-btn @click="lightsOut.restart()"> restart </v-btn>
    <v-btn @click="lightsOut.showAnswer()"> answer </v-btn>
    <div>
      {{ isGameClear ? 'Game Clear!' : '' }}
    </div>
    <div>{{ shortestCount }} / {{ clickCount }}</div>
  </v-bnt>
</template>

<script setup lang="ts">
const lightsOut = useLightsOut();
const field = computed(() => lightsOut.field);
const isGameClear = computed(() => lightsOut.isGameClear);
const shortestCount = computed(() => lightsOut.shortestCount);
const clickCount = computed(() => lightsOut.clickCount);
const shortestField = computed(() => lightsOut.shortestField);
const isShowAnswer = computed(() => lightsOut.isShowAnswer);

const onClickCell = (y: number, x: number) => {
  lightsOut.toggle(y, x);
};

lightsOut.initialize();
lightsOut.start();
</script>

<style scoped lang="scss">
.lights-out {
  padding: 16px;
}
</style>
