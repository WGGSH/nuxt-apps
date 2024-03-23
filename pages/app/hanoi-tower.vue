<template>
  <v-container>
    <hanoi-tower-towers
      :towers="towers"
      :disk-count="diskCount"
      @on-click-tower="onClickTower"
    />

    <v-btn>
      reset
    </v-btn>
    {{ selectedDisk }}
  </v-container>
</template>

<script setup lang="ts">
const hanoiTower = useHanoiTower();

const towers = computed(() => hanoiTower.towers);
const diskCount = computed(() => hanoiTower.diskCount);
const selectedDisk = computed(() => hanoiTower.selectedDisk);

const onClickTower = (index: number) => {
  if (selectedDisk.value === null) {
    hanoiTower.removeDisk(index);
  } else {
    hanoiTower.insertDisk(index);
  }
};

hanoiTower.start();
</script>
