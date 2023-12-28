<script setup>
import Person from "../Icons/Person.vue";
import Send from "../Icons/Send.vue";
</script>
<template>
  <div class="flex flex-col lg:flex-row my-20 items-center">
    <div class="w-full lg:w-6/12 pr-0 lg:pr-28">
      <h1 class="flex text-4xl font-semibold text-primary-900">
        Let your business thrive <br />
        under our supervision
      </h1>
      <p class="mt-10 mb-10">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
      </p>
      <p class="my-5 font-semibold">We are making every business grow!</p>
      <div class="pb-10">
        <div class="flex flex-col pb-5 w-full lg:w-10/12">
          <div class="relative mb-6">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <Person />
            </div>
            <input
              type="text"
              id="input-group-1"
              class="border border-gray-100 text-black text-sm rounded focus:ring-primary focus:border-primary block w-full ps-12 p-2.5"
              placeholder="Full Name"
            />
          </div>
          <div class="relative mb-6">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <Send />
            </div>
            <input
              type="email"
              id="input-group-1"
              class="border border-gray-100 text-black text-sm rounded focus:ring-primary focus:border-primary block w-full ps-12 p-2.5"
              placeholder="Email Address"
            />
          </div>
          <div class="flex">
            <a href="#" class="w-full text-sm text-center px-6 py-3 rounded bg-secondary"
              >Contact Now ></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-6/12 flex lg:justify-center relative mt-20 lg:mt-0">
      <div class="bg-gray w-full lg:w-8/12 text-center flex justify-center relative" style="height: 470px">
        <img
          src="../Assets/person-business-2.png"
          width="340px"
          alt="person business"
          class="absolute bottom-0"
        />
      </div>
      <div class="absolute right-10 bottom-24 flex flex-nowrap shadow"><img src="../Assets/business-thrive-graph.jpeg" width="200px" ></div>
    </div>
  </div>
</template>
