<template>
  <v-app>
    <v-container>
      <v-app-bar color="primary" height="40">
        <v-app-bar-nav-icon @click="drawer = true" />
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Application
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <div class="content">
        <slot />
      </div>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  mdiHome,
  mdiCheckerboard,
} from '@mdi/js';

const drawer = ref(false);
const items = ref([
  {
    title: 'Home',
    icon: mdiHome,
    path: '/',
  },
  {
    title: 'Life Game',
    icon: mdiCheckerboard,
    path: '/app/life-game',
  },
]);
</script>

<style scoped lang="scss">
.content {
  margin-top: 40px;
}
</style>
