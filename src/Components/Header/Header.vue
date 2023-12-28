<script setup>
import Menu from "../Menu.vue";
import Logo from "../../Icons/Logo.vue";
import Squares from "../../Icons/Squares.vue";
import {ref} from "vue"

const menus = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "About",
    url: "#",
  },
  {
    name: "Pricing",
    url: "#",
  },
  {
    name: "Blog",
    url: "#",
  },
];

const showMobileMenu = ref(false)
</script>

<template>
  <div>
    <div class="flex items-center py-4 justify-between">
      <div class="pr-5">
        <Logo />
      </div>
      <div
        class="hidden space-x-2 w-full justify-between sm:flex sm:items-center"
      >
        <Menu :menu-list="menus" />
        <div class="hidden sm:flex sm:items-center">
          <a href="#" class="text-sm px-6 py-3 rounded bg-secondary"
            >Contact Now</a
          >
        </div>
      </div>
      <div class="sm:hidden cursor-pointer bg-secondary p-2 rounded" @click="showMobileMenu = !showMobileMenu">
        <Squares />
      </div>
    </div>

    <div :class="showMobileMenu ? 'flex' : 'hidden'" class="transition ease-in-out delay-150">
      <!-- mobile menu -->
      <div class="absolute w-10/12 top-30 right-5 shadow-2xl bg-white">
        <a
          v-for="(menu, key) in menus"
          :key="key"
          :href="menu.url"
          class="flex p-3 px-6 text-md justify-end border border-x-0 border-t-0 last:border-0 border-b-primary-900"
        >
          {{ menu.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
