<template>
  <v-app>
    <v-container>
      <v-app-bar color="primary" height="40">
        <v-app-bar-nav-icon @click="drawer = true" />
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" />
      <div class="content">
        <slot />
      </div>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(false)
</script>

<style scoped lang="scss">
.content {
  margin-top: 40px;
}
</style>
