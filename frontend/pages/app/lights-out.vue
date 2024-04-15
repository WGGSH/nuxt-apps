<template>
  <div class="lights-out">
    <lights-out-board :field="field" @on-click-cell="onClickCell" />
    <div>
      {{ isGameClear ? "Game Clear!" : "" }}
    </div>
    <div>{{ shortestCount }} / {{ clickCount }}</div>
    <!-- {{ fastestField }} -->
  </div>
</template>

<script setup lang="ts">
const lightsOut = useLightsOut();
const field = computed(() => lightsOut.field);
const isGameClear = computed(() => lightsOut.isGameClear);
const shortestCount = computed(() => lightsOut.shortestCount);
const clickCount = computed(() => lightsOut.clickCount);
const fastestField = computed(() => lightsOut.fastestField);

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
