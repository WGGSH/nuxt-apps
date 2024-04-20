<template>
  <v-app :theme="currentTheme">
    <v-container class="main">
      <v-app-bar
        color="primary"
        height="40"
      >
        <v-app-bar-nav-icon @click="drawer = true" />
        <v-spacer />
        <v-app-bar-nav-icon
          :icon="mdiReload"
          class="reload"
          @click="reload"
        />

        <v-app-bar-nav-icon
          :icon="themeIcon"
          class="theme-toggle"
          @click="toggleTheme"
        />
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list-item>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.path"
          >
            <v-icon :icon="item.icon" />
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
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
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
  mdiReload,
  mdiHome,
  mdiCheckerboard,
  mdiEiffelTower,
  mdiCardsPlayingClubMultipleOutline,
  mdiMine,
  mdiLightbulbOff,
  mdiWeatherSunny,
  mdiWeatherNight,
} from '@mdi/js';

const theme = useTheme();
const currentTheme = computed(() => theme.themeName);

const router = useRouter();

const drawer = ref(false);
const items = ref([
  {
    title: 'Home',
    icon: mdiHome,
    path: '/',
  },
  {
    title: 'ライフゲーム',
    icon: mdiCheckerboard,
    path: '/app/life-game',
  },
  {
    title: 'ハノイの塔',
    icon: mdiEiffelTower,
    path: '/app/hanoi-tower',
  },
  {
    title: 'ソリティア',
    icon: mdiCardsPlayingClubMultipleOutline,
    path: '/app/klondike',
  },
  {
    title: 'マインスイーパー',
    icon: mdiMine,
    path: '/app/mine-sweeper',
  },
  {
    title: 'ライツアウト',
    icon: mdiLightbulbOff,
    path: '/app/lights-out',
  },
]);

const themeIcon = computed(() => {
  return theme.themeName === 'light' ? mdiWeatherNight : mdiWeatherSunny;
});

const reload = () => {
  location.reload();
};

const toggleTheme = () => {
  theme.toggleTheme();
};

watch(router.currentRoute, () => {
  const path = router.currentRoute.value.path;
  if (path !== '/') {
    localStorage.setItem('path', path);
  }
});

theme.fetchByLocalStorage();
</script>

<style scoped lang="scss">
.main {
  padding: 0;
}

.content {
  margin-top: 40px;
}
</style>
