<template>
  <!-- <v-card v-hold:500="onHold" class="cell" :style="cellStyle" @click="onClick"> -->
  <v-card class="cell" :style="cellStyle" v-click-and-hold="{ click: onClick, longPress: onHold }">
    <div v-if="isMine" class="icon">
      <v-icon v-if="isGameOver || status === 'revealed'" :icon="mdiBomb" />
      <v-icon v-else-if="isGameClear || status === 'flagged'" :icon="mdiFlag" />
    </div>
    <div v-else-if="status === 'revealed'" class="icon" :class="{ 'is-empty': mineCount === 0 }">
      <div v-if="mineCount > 0" :style="countColor">
        {{ mineCount }}
      </div>
    </div>
    <div v-else-if="status === 'flagged'" class="icon">
      <v-icon :icon="mdiFlag" />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import tinyColor from 'tinycolor2';

import {
  mdiBomb,
  mdiFlag,
} from '@mdi/js';
import type { Cell } from '~/types/mine-sweeper';

const props = defineProps<{
  cell: Cell,
  isGameOver: boolean,
  isGameClear: boolean,
}>();

const isMine = computed(() => props.cell.isMine);
const status = computed(() => props.cell.status);
const mineCount = computed(() => props.cell.mineCount);

const theme = useTheme();

const cellStyle = computed(() => {
  if (status.value === 'revealed' && !isMine.value && mineCount.value === 0) {
    if (theme.currentTheme.dark) {
      return {
        backgroundColor: tinyColor(theme.currentTheme.colors.background).lighten(30).toRgbString(),
      };
    } else {
      return {
        backgroundColor: tinyColor(theme.currentTheme.colors.background).darken(50).toRgbString(),
      };
    }
  }
  return {};
});

const countColor = computed(() => {
  if (mineCount.value === 1) {
    return {
      color: 'blue',
    };
  } else if (mineCount.value === 2) {
    return {
      color: 'green',
    };
  } else if (mineCount.value === 3) {
    return {
      color: 'red',
    };
  } else if (mineCount.value === 4) {
    return {
      color: 'purple',
    };
  } else if (mineCount.value === 5) {
    return {
      color: 'maroon',
    };
  } else if (mineCount.value === 6) {
    return {
      color: 'turquoise',
    };
  } else if (mineCount.value === 7) {
    return {
      color: 'black',
    };
  } else if (mineCount.value === 8) {
    return {
      color: 'gray',
    };
  }
  return {};
});

const emit = defineEmits<{
  click: () => void
  hold: () => void
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
  min-width: 20px;
  padding-top: 100%;
  border: 1px solid rgb(var(--v-theme-on-background));

  >.icon {
    position: absolute;
    font-size: 125%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & .is-empty {
      background-color: red;
    }
  }
}
</style>
