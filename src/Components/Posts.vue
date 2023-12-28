<script setup>
import ChevronRight from "../Icons/ChevronRight.vue";
import ChevronLeft from "../Icons/ChevronLeft.vue";
</script>
<template>
    <div class="text-center py-8">
        <h2 class="text-4xl text-primary-900 font-semibold">Our latest updates for you here!</h2>
        <p class="p-3">Whats heppening around the World.</p>
    </div>
  <div class="flex flex-col lg:flex-row justify-evenly">
    <div class="w-full lg:max-w-sm bg-white rounded">
      <a href="#">
        <img class="rounded-t-lg" src="../Assets/posts/growth.png" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-sm">
            Growth
          </h5>
        </a>
        <p class="my-6 font-medium text-xl">
            15 ways to grow your saas in 21 days with no money
        </p>
        <div class="flex justify-center lg:justify-normal">
            <div class="p-2 lg:hidden mr-3 w-max border border-secondary"><ChevronLeft /></div>
            <div class="p-2 w-max border border-secondary"><ChevronRight /></div>
        </div>
      </div>
    </div>
    <div class="w-full hidden lg:block lg:max-w-sm bg-white rounded">
      <a href="#">
        <img class="rounded-t-lg" src="../Assets/posts/career.png" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-sm">
            Career
          </h5>
        </a>
        <p class="my-6 font-medium text-xl">
            Why everyone is moving today to subscribtions
        </p>
        <div class="p-2 w-max border border-secondary"><ChevronRight /></div>
      </div>
    </div>
    <div class="w-full hidden lg:block lg:max-w-sm bg-white rounded">
      <a href="#">
        <img class="rounded-t-lg" src="../Assets/posts/design.png" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-sm">
            Design
          </h5>
        </a>
        <p class="my-6 font-medium text-xl">
            9 ways to make it quick and never look back again in your life
        </p>
        <div class="p-2 w-max border border-secondary"><ChevronRight /></div>
      </div>
    </div>
  </div>
</template>
