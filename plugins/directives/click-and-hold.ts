export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-and-hold', {
    mounted(el, binding) {
      let isHold: boolean = false;
      let pressTimer: NodeJS.Timeout;

      const handleTouchstart = () => {
        pressTimer = setTimeout(() => {
          isHold = true;
          binding.value.longPress();
        }, 500);

        el.addEventListener('mouseup', () => {
          setTimeout(() => {
            isHold = false;
            clearTimeout(pressTimer);
          }, 100);
        });
      };

      const handleClick = () => {
        if (isHold) { return; }
        binding.value.click();
      };

      el.addEventListener('touchstart', handleTouchstart);
      el.addEventListener('click', handleClick);
    },
  });
});
