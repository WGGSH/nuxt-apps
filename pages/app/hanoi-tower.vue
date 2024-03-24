<template>
  <v-container>
    <hanoi-tower-towers
      :towers="towers"
      :disk-count="diskCount"
      :disk-size="DISK_SIZE"
      @on-click-tower="onClickTower"
    />

    <div
      class="selected-disk-field"
      :style="{ height: `${DISK_SIZE}px` }"
    >
      <hanoi-tower-disk
        v-if="selectedDisk !== null"
        :disk="selectedDisk"
        :width="(selectedDisk + 1) * DISK_SIZE"
        :height="DISK_SIZE"
      />
    </div>

    <v-divider class="ma-4" />

    <v-row align="center">
      <v-col
        cols="8"
        sm="6"
      >
        <v-number-input
          v-model="modelDiskCount"
          label="Disk Count"
          min="3"
          max="10"
          width="200"
          control-variant="split"
        />
      </v-col>

      <v-col
        cols="4"
        sm="2"
      >
        <v-btn @click="reset">
          reset
        </v-btn>
      </v-col>
      <v-label v-if="hanoiTower.isClear">
        clear!!
      </v-label>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const hanoiTower = useHanoiTower();
const DISK_SIZE = 25;

const modelDiskCount = ref(3);

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

const reset = () => {
  hanoiTower.start(modelDiskCount.value);
};

reset();
</script>

<style scoped lang="scss">
.selected-disk-field {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>
