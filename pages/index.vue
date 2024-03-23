<template>
  <div>
    hoge
    <v-btn
      class="btn"
      @click="click"
    >
      hoge
    </v-btn>
  </div>
</template>

<script setup lang="ts">
const click = () => {
  console.log('click');
};
</script>

<style scoped lang="scss">
.btn {
  color: red;
  background-color: blue;

  &:hover {
    color: blue;
    background-color: red;
  }
}
</style>
