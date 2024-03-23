// import this after install `@mdi/font` package
import 'vuetify/styles';

import vuetify from '~/utils/vuetify';

export default defineNuxtPlugin((app) => {
  app.vueApp.use(vuetify);
});
