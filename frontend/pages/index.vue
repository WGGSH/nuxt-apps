<template>
  <div />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const path = localStorage.getItem('path') || '/';

router.push(path);
</script>
