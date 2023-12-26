<script setup>
import Menu from "./Menu.vue";
import Logo from "../Icons/Logo.vue";
import Squares from "../Icons/Squares.vue";
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
        <Menu />
        <div class="hidden sm:flex sm:items-center">
          <a href="#" class="text-sm px-6 py-3 rounded bg-secondary"
            >Contact Now</a
          >
        </div>
      </div>
      <div class="sm:hidden cursor-pointer">
        <Squares />
      </div>
    </div>

    <div class="block sm:hidden bg-white py-2">
      <div class="flex flex-col">
        <!-- mobile menu -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
