export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('hold', {
    mounted(el, binding) {
      const count = (binding?.arg || 1000) as number;
      let timer: NodeJS.Timeout;
      el.addEventListener('touchstart', () => {
        timer = setTimeout(() => {
          if (binding.value) {
            binding.value();
          }
        }, count);
      });
      el.addEventListener('touchend', () => {
        clearTimeout(timer);
      });
    },
  });
});
