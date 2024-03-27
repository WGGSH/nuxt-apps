import type { ThemeDefinition } from 'vuetify';

export const useTheme = defineStore('useTheme', {
  state: () => ({
    themeName: 'light',
  }),
  getters: {
    currentTheme(): ThemeDefinition {
      return vuetify.theme.computedThemes.value[this.themeName];
    },
  },
  actions: {
    fetchByLocalStorage() {
      this.themeName = localStorage.getItem('theme') || 'light';
    },
    toggleTheme() {
      this.themeName = this.themeName === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.themeName);
    },
  },
});
