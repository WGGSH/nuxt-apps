<template>
  <v-card
    :width="props.width"
    :height="props.height"
  >
    {{ props.disk }}
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  disk: number,
  width: number,
  height: number,
}>();
</script>
