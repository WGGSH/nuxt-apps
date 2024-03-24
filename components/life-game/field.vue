<template>
  <v-card
    v-if="props.field"
    elevation="24"
    class="field pa-2"
  >
    <div
      v-for="(row, y) in props.field"
      :key="y"
      class="row"
    >
      <v-btn
        v-for="(cell, x) in row"
        :key="x"
        class="cell"
        flat
        :color="cell ? 'primary' : 'background'"
        :class="{ 'is-fill': cell }"
        @click="clickCell(y, x)"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  field: boolean[][] | null
}>();

const size = computed(() => props.field?.length ?? 0);

const emits = defineEmits<{
  onClickCell:(y: number, x: number) => void
}>();

const clickCell = (y: number, x: number) => {
  emits('onClickCell', y, x);
};
</script>

<style scoped lang="scss">
.field {
  >.row {
    display: flex;
    justify-content: center;
    width: 100%;

    > .cell {
      width: calc(100% / v-bind(size));
      min-width: 0 !important;
      padding-top: calc(100% / v-bind(size));
      margin: -1px;
      background: white;
      outline: 5px solid;
      border-radius: 0;

      &.is-fill {
        outline: 5px solid rgb(var(--v-theme-on-surface));
      }
    }
  }
}
</style>
