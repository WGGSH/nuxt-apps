<template>
  <div class="towers">
    <v-card
      v-for="(tower, index) in props.towers"
      :key="tower"
      class="tower ma-2"
      :style="{
        height: `calc(${props.diskCount + 1} * ${DISK_SIZE}px)`
      }"
      @click="clickTower(index)"
    >
      <div
        class="pole"
        :class="{ 'is-goal': index === towers.length - 1 }"
        :style="{
          width: `calc(${DISK_SIZE}px / 2)`
        }"
      />
      <div class="disk-margin" />

      <hanoi-tower-disk
        v-for="disk in tower"
        :key="disk"
        :disk="disk"
        :width="disk * DISK_SIZE"
        :height="DISK_SIZE"
      />
    </v-card>
  </div>
</template>

<script setup lang="ts">
const DISK_SIZE = 25;

const props = defineProps<{
  towers: number[][],
  diskCount: number,
}>();

const emit = defineEmits<{
  onClickTower:(index: number) => void,
}>();

const clickTower = (index: number) => {
  emit('onClickTower', index);
};

</script>

<style scoped lang="scss">
.towers {
  display: flex;
  justify-content: space-around;

  .tower {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3);
    text-align: center;
    background-color: #f0f0f0;

    >.pole {
      position: absolute;
      height: 100%;
      background-color: black;

      &.is-goal {
        background-color: red;
      }
    }

    >.disk-margin {
      flex: 1;
    }
  }
}
</style>
