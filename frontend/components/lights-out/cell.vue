<template>
  <v-card
    class="cell"
    :class="{ 'is-fill': props.cell }"
    :color="cell ? 'primary' : 'background'"
    @click="onClickCell"
  >
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  cell: Cell,
}>();

const emits = defineEmits<{
  click:() => void
}>();

const onClickCell = () => {
  emits('click');
};

</script>

<style scoped lang="scss">
.cell {
  padding-top: 100%;
  border: 1px solid;
  background-color: rgb(var(--v-theme-on-background));
}
</style>
