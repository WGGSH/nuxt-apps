<template>
  <div class="lights-out">
    <lights-out-board :field="field" @on-click-cell="onClickCell"/>
    {{ isGameClear }}
  </div>
</template>

<script setup lang="ts">
const lightsOut = useLightsOut();
const field = computed(() => lightsOut.field);
const isGameClear = computed(() => lightsOut.isGameClear);

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
