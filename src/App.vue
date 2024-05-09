<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import TheHeader from './components/TheHeader.vue';

const route = useRoute()
</script>

<template>
  <TheHeader :isLp="route.path === '/lp'"></TheHeader>
  <RouterView v-slot="{ Component }" >
    <component :is="Component" />
  </RouterView>
</template>

