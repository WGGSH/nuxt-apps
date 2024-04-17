<template>
  <div class="board">
    <div v-for="(row, y) in props.field" :key="y" class="row">
      <div
        v-for="(cell, x) in row"
        :key="x"
        class="cell"
        :class="{ 'cell--on': cell }"
      >
        <lights-out-cell :cell="cell" :answer="shortestField[y][x]" :show-answer="showAnswer" @click="onClickCell(y, x)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  field: boolean[][];
  shortestField: boolean[][];
  showAnswer: boolean;
}>();

const emits = defineEmits<{
  onClickCell: (y: number, x: number) => void;
}>();

const onClickCell = (y: number, x: number) => {
  emits("onClickCell", y, x);
};
</script>

<style scoped lang="scss">
.board {
  background-color: rgb(var(--v-theme-on-background));

  .row {
    display: flex;
    width: 100%;

    > .cell {
      flex: 1;
      // height: 50px;
    }
  }
}
</style>
