<template>
  <div class="flex">
    <a
      v-for="(menu, key) in menuList"
      :key="key"
      :href="menu.url"
      class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4 p-4 lg:p-8 last:mr-0 last:pr-0"
      >{{ menu.name }}</a
    >
  </div>
</template>

<script setup>
const props = defineProps(['menuList'])
</script>