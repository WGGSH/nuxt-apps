<template>
  <v-container
    class="board pa-4"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div
      v-for="(row, y) in props.field"
      :key="y"
      class="row"
    >
      <div
        v-for="(cell, x) in row"
        :key="x"
        class="col"
      >
        <mine-sweeper-cell
          :cell="cell"
          :is-game-over="props.isGameOver"
          :is-game-clear="props.isGameClear"
          @click="onClickCell(y, x)"
          @hold="onHoldCell(y, x)"
        />
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import tinyColor from 'tinycolor2';
import type { Cell } from '~/types/mine-sweeper';

const theme = useTheme();

const props = defineProps<{
  field: Cell[][],
  isGameOver: boolean,
  isGameClear: boolean,
}>();

const emit = defineEmits<{
  clickCell:(y: number, x: number) => void
  holdCell:(y: number, x: number) => void
}>();

const onClickCell = (y: number, x: number) => {
  emit('clickCell', y, x);
};

const onHoldCell = (y: number, x: number) => {
  emit('holdCell', y, x);
};

const backgroundColor = computed(() => {
  if (theme.currentTheme.dark) {
    return tinyColor(theme.currentTheme.colors.primary).darken(40).toRgbString();
  } else {
    return tinyColor(theme.currentTheme.colors.primary).lighten(50).toRgbString();
  }
});

</script>

<style scoped lang="scss">
.board {
  background-color: rgb(var(--v-theme-on-background));

  .row {
    display: flex;
    width: 100%;

    >.col {
      flex: 1;
      // height: 50px;
    }
  }
}
</style>
