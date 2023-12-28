<script setup>
import ChevronRight from "../Icons/ChevronRight.vue";
import Star from "../Icons/Star.vue";
import Message from "../Icons/Banner/Message.vue";
import Tree from "../Icons/Banner/Tree.vue";
import ArrowGraph from "../Icons/Banner/ArrowGraph.vue";
import TwistedArrow from "../Icons/Banner/TwistedArrow.vue";
</script>
<template>
  <div class="flex flex-col lg:flex-row lg:mt-20">
    <div class="w-full lg:w-5/12">
      <h1 class="flex text-3xl lg:text-4xl font-semibold text-primary-900">
        Generate invoices <br />effortlessly.
      </h1>
      <p class="mt-8 lg:mt-20 mb-10">
        Empower your invoicing process with Expedite, the ultimate tool for
        swift payments. Streamline cashflow through easy invoicing, diverse
        payment options, efficient expense management, and more.
      </p>
      <div class="flex items-center mb-10">
        <a href="#" class="text-sm px-4 lg:px-6 py-3 rounded bg-secondary"
          >Contact Now</a
        >
        <div class="ml-5 p-2 border border-secondary"><ChevronRight /></div>
        <a href="#" class="text-sm px-6 py-3">Book a Demo Today</a>
      </div>
      <div class="flex items-center">
        <div class="p-3 bg-secondary"><Star /></div>
        <div class="ml-5">Rated 4.9 out of 1200 reviews</div>
      </div>
    </div>
    <div class="w-full lg:w-7/12">
      <div class="relative w-full h-96 left-0 right-0">
        <div class="absolute bottom-5 right-5 z-10">
          <img
            src="../Assets/Banner/banner-bg.png"
            width="450px"
            alt="background"
          />
        </div>
        <div class="absolute bottom-0 right-40 z-20">
          <img
            src="../Assets/Banner/banner-bg-ellipse.png"
            width="280px"
            alt="ellipse"
          />
        </div>
        <div class="absolute bottom-0 right-24 z-30">
          <img
            src="../Assets/Banner/banner-student.png"
            width="300px"
            alt="hero image"
          />
        </div>
        <div class="absolute hidden lg:flex top-0 left-52 z-40">
          <img
            src="../Assets/Banner/banner-visitors.jpeg"
            width="140px"
            class="shadow"
          />
        </div>
        <div class="absolute top-52 left-0 lg:left-60 z-50">
          <div class="rounded-full bg-pink text-white shadow py-3 px-6 text-xs">
            Communication
          </div>
        </div>
        <div class="absolute top-40 left-0 lg:left-80 z-50">
          <div class="shadow-xl rounded-xl bg-white p-1"><Message /></div>
        </div>
        <div class="absolute right-16 z-50 bottom-52">
          <div
            class="rounded-full bg-green text-white shadow py-3 px-6 text-xs"
          >
            Task Management
          </div>
        </div>
        <div class="absolute right-14 z-50 bottom-64">
          <div class="shadow-xl rounded-xl bg-white p-1"><Tree /></div>
        </div>
        <div class="absolute right-5 bottom-28 z-50">
          <div
            class="rounded-full shadow bg-yellow text-white py-3 px-6 text-xs"
          >
            Analytics
          </div>
        </div>
        <div class="absolute right-16 bottom-0 z-50">
          <div class="shadow-xl rounded-xl bg-white p-1"><ArrowGraph /></div>
        </div>
        <div class="absolute z-50 right-0">
          <TwistedArrow />
        </div>
      </div>
    </div>
  </div>
</template>
