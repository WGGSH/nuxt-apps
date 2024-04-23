<template>
  <div class="towers">
    <v-card
      v-for="(tower, index) in props.towers"
      :key="tower"
      class="tower ma-2"
      :style="{
        height: `calc(${props.diskCount + 1} * ${props.diskSize}px)`,
      }"
      @click="clickTower(index)"
    >
      <v-card
        class="pole"
        :class="{ 'is-goal': index === towers.length - 1 }"
        :color="index === towers.length - 1 ? 'primary' : 'grey'"
        :style="{
          width: `calc(${props.diskSize}px / 2)`,
        }"
      />
      <div class="disk-margin" />

      <hanoi-tower-disk
        v-for="disk in tower"
        :key="disk"
        :disk="disk"
        :width="(disk + 1) * diskSize"
        :height="diskSize"
      />
    </v-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  towers: number[][];
  diskCount: number;
  diskSize: number;
}>();

const diskSize = computed(() => props.diskSize);

const emit = defineEmits<{
  onClickTower: (index: number) => void;
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

    > .pole {
      position: absolute;
      height: 100%;

      &.is-goal {
        background-color: rgb(var(--v-theme-secondary));
      }
    }

    > .disk-margin {
      flex: 1;
    }
  }
}
</style>
