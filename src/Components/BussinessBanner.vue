<script setup>
import Tick from '../Icons/Tick.vue';
</script>
<template>
  <div class="flex flex-col lg:flex-row my-20">
    <div class="w-full lg:w-6/12 flex relative mt-20 lg:mt-0 order-2 lg:order-1">
      <div class="bg-gray w-full lg:w-8/12 text-center flex justify-center relative" style="height: 470px">
        <img
          src="../Assets/person-business.png"
          width="370px"
          alt="person business"
          class="absolute bottom-0"
        />
      </div>
      <div class="absolute right-44 top-52 flex flex-nowrap shadow"><img src="../Assets/new-visitors-graph.jpeg" width="180px"></div>
    </div>
    <div class="w-full lg:w-6/12 pt-10 lg:pt-0 order-1 lg:order-2 pr-0 lg:pr-28">
      <h1 class="flex text-4xl text-primary-900 font-semibold">
        Let your business thrive <br>under our supervision
      </h1>
      <p class="mt-10 mb-10">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
      </p>
      <p class="my-5">We are making every business grow!</p>
      <div class="pb-10">
        <div class="flex flex-row pb-5 items-center">
          <div class="p-3 bg-secondary rounded"><Tick /></div>
          <p class="pl-5">
            Super useful and easy to use interface
          </p>
        </div>
        <div class="flex flex-row pb-5 items-center">
          <div class="p-3 bg-secondary rounded"><Tick /></div>
          <p class="pl-5">
            Easiest way to grow your business in days
          </p>
        </div>
      </div>
      <div class="flex items-center mb-10">
        <a href="#" class="text-sm px-6 py-3 w-full lg:w-auto text-center lg:text-left rounded bg-secondary"
          >Contact Now ></a
        >
      </div>
    </div>
  </div>
</template>
