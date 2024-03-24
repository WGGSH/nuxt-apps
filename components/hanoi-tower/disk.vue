<template>
  <v-card
    :width="props.width"
    :height="props.height"
    class="card text-h5"
    :color="diskColor"
  >
    {{ props.disk }}
  </v-card>
</template>

<script setup lang="ts">
import tynyColor from 'tinycolor2';

const props = defineProps<{
  disk: number,
  width: number,
  height: number,
}>();

const diskColor = computed(() => {
  return tynyColor(vuetify.theme.current.value.colors.primary).lighten(props.disk * 5).toString();
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}
</style>
