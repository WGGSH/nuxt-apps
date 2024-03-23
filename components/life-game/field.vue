<template>
  <div
    v-if="props.field"
    class="hoge"
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
        :color="cell ? 'primary' : 'grey'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  field: boolean[][] | null
}>();

const size = computed(() => props.field?.length ?? 0);
</script>

<style scoped lang="scss">
.hoge {
  background: red;
}

.cell {
  width: calc(100% / v-bind(size));
  min-width: 0 !important;
  padding-top: calc(100% / v-bind(size));
  background: white;
}

.row {
  display: flex;
  width: 100%;
}
</style>
