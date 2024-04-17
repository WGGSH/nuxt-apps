<template>
  <v-card
    class="cell"
    :class="{
      'is-fill': props.cell,
      'is-answer': props.showAnswer && props.answer,
    }"
    :color="cell ? 'primary' : 'background'"
    @click="onClickCell"
  >
    <div v-if="props.showAnswer && props.answer" class="answer"></div>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  cell: Cell;
  answer: boolean;
  showAnswer: boolean;
}>();

const emits = defineEmits<{
  click: () => void;
}>();

const onClickCell = () => {
  emits("click");
};
</script>

<style scoped lang="scss">
.cell {
  padding-top: 100%;
  border: 1px solid;
  background-color: rgb(var(--v-theme-on-background));

  > .answer {
    color: red;
    position: absolute;
    top: 25%;
    left: 25%;
    // border: 1px solid;
    width: 50%;
    height: 50%;
    background-color: rgb(var(--v-theme-secondary));
  }
}
</style>
