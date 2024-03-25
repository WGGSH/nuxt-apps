<template>
  <v-card
    v-hold:500="onHold"
    class="card"
    @click="onClick"
  >
    <div class="text">
      {{ props.cell.isMine }}
      {{ props.cell.status }}
      {{ props.cell.mineCount }}
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { Cell } from '~/types/mine-sweeper';
const props = defineProps<{
  cell: Cell
}>();

const emit = defineEmits<{
  click:() => void
  hold:() => void
}>();

const onClick = () => {
  emit('click');
};

const onHold = () => {
  emit('hold');
};

</script>

<style scoped lang="scss">
.card {
  width: 100%;
  padding-top: 100%;
  border: 1px solid rgb(var(--v-theme-on-background));

  >.text {
    position: absolute;
    font-size: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
