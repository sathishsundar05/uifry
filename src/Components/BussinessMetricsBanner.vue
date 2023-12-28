<script setup>
import ChevronRight from "../Icons/ChevronRight.vue";
import Tick from "../Icons/Tick.vue";
</script>
<template>
  <div class="flex flex-col lg:flex-row my-20 items-center">
    <div class="w-full lg:w-6/12 pr-0 lg:pr-28">
      <h1 class="flex text-xl lg:text-4xl font-semibold text-primary-900">
        Let your business thrive <br />
        under our supervision
      </h1>
      <p class="text-sm lg:text-md my-10">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
      </p>
      <div class="flex flex-col lg:flex-row mb-5">
        <div class="flex flex-row mb-6 items-center">
          <div class="p-3 bg-secondary rounded"><Tick /></div>
          <div class="pl-5">
            <div class="text-xl font-semibold">100+</div>
            <div class="text-sm font-semibold">Successfull Projects</div>
          </div>
        </div>
        <div class="flex flex-row mb-6 lg:ml-6 items-center">
          <div class="p-3 bg-secondary rounded"><Tick /></div>
          <div class="pl-5">
            <div class="text-xl font-semibold">978+</div>
            <div class="text-sm font-semibold">Clients Today</div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <a href="#" class="text-sm px-4 lg:px-6 py-3 rounded bg-secondary"
          >Contact Now</a
        >
        <div class="ml-5 p-2 border border-secondary"><ChevronRight /></div>
        <a href="#" class="text-sm px-6 py-3">Book a Demo Today</a>
      </div>
    </div>
    <div class="w-full lg:w-6/12 flex lg:justify-center relative mt-20 lg:mt-0">
      <div class="bg-gray w-full lg:w-8/12 text-center flex justify-center relative" style="height: 470px">
        <img
          src="../Assets/person-business-3.png"
          width="300px"
          alt="person business"
          class="absolute bottom-0"
        />
      </div>
      <div class="absolute right-2 bottom-20 flex flex-nowrap"><img src="../Assets/client-files-graph.jpeg" width="200px" ></div>
    </div>
  </div>
</template>
