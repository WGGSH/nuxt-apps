<template>
  <v-card
    v-hold:500="onHold"
    class="cell"
    @click="onClick"
  >
    <div v-if="status === 'hidden'" class="icon"/>
    <div v-else-if="status === 'flagged'" class="icon">
      <v-icon>mdi-flag</v-icon>
    </div>
    <div v-else-if="status === 'revealed'" class="icon">
      <div v-if="isMine">
        <v-icon>mdi-bomb</v-icon>
      </div>
      <div v-else-if="mineCount > 0">
        {{ mineCount }}
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { Cell } from '~/types/mine-sweeper';
import {
  mdiBomb,
  mdiFlag,
} from '@mdi/js';

const props = defineProps<{
  cell: Cell
}>();

const isMine = computed(() => props.cell.isMine);
const status = computed(() => props.cell.status);
const mineCount = computed(() => props.cell.mineCount);

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
.cell {
  width: 100%;
  padding-top: 100%;
  border: 1px solid rgb(var(--v-theme-on-background));

  >.icon {
    position: absolute;
    font-size: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
