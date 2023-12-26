<template>
  <div>
    <a
      v-for="(menu, key) in menuList"
      :key="key"
      :href="menu.url"
      class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 p-8"
      >{{ menu.name }}</a
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
const menuList = ref([
    {
        name: 'Home',
        url: '#'
    },
    {
        name: 'About',
        url: '#'
    },
    {
        name: 'Pricing',
        url: '#'
    },
    {
        name: 'Blog',
        url: '#'
    }
]);
</script>