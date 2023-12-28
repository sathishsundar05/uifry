<script setup>
import ArrowRight from "../Icons/ArrowRight.vue";
import ArrowLeft from "../Icons/ArrowLeft.vue";
</script>

<template>
  <div class="py-6">
    <div class="flex justify-center">
      <div class="w-full">
        <div class="absolute z-10">
          <img src="../Assets/testimonial.png" width="340px" height="340px" />
        </div>
        <div class="bg-blue-100 ml-52 mt-2 pl-52 pr-20 py-16 rounded">
          <div class="pb-14">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex flex-col">
              <h2 class="text-md">John Doe, UX Designer</h2>
              <h3 class="text-blue text-3xl font-bold">facebook</h3>
            </div>
            <div class="flex flex-row">
              <div class="bg-blue rounded-full p-2 text-white bg-opacity-50"><ArrowLeft /></div>
              <div class="bg-blue rounded-full p-2 ml-3 text-white"><ArrowRight /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
