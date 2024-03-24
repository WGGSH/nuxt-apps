export const useTheme = defineStore('useTheme', {
  state: () => ({
    theme: 'light',
  }),
  actions: {
    fetchByLocalStorage() {
      this.theme = localStorage.getItem('theme') || 'light';
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
    },
  },
});
