<script setup>
import Plus from "../Icons/Plus.vue";
import Minus from "../Icons/Minus.vue";
import ChevronRight from "../Icons/ChevronRight.vue";
</script>
<template>
  <div class="px-0 lg:px-20 py-20">
    <div class="mb-6">
      <h2 class="mb-3 text-4xl font-semibold tracking-tight text-center">
        Frequently asked questions
      </h2>
      <p class="text-sm text-center">Whats happening around the World.</p>
    </div>
    <div class="w-full lg:w-10/12 mx-auto">
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white"
        data-inactive-classes="text-gray-500"
      >
        <h3 id="accordion-flush-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 px-3 lg:px-10 text-sm font-medium text-left text-white bg-primary rounded"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>What is the best way to create a saas business today?</span>
            <Minus />
          </button>
        </h3>
        <div
          id="accordion-flush-body-1"
          aria-labelledby="accordion-flush-heading-1"
        >
          <div class="py-8 px-3 lg:px-10 text-sm">
            <p>
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
            <p class="pt-6">
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
          </div>
        </div>
        <h3 id="accordion-flush-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 px-3 lg:px-10 mb-5 text-sm font-medium text-left text-gray-500 border border-black rounded"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>What is the best way to create a saas business today?</span>
            <Plus />
          </button>
        </h3>
        <div
          id="accordion-flush-body-2"
          class="hidden"
          aria-labelledby="accordion-flush-heading-2"
        >
          <div class="py-8 px-3 lg:px-10 text-sm">
            <p>
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
            <p class="pt-6">
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
          </div>
        </div>
        <h3 id="accordion-flush-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 px-3 lg:px-10 mb-5 text-sm font-medium text-left text-gray-500 border border-black rounded"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>What is the best way to create a saas business today?</span>
            <Plus />
          </button>
        </h3>
        <div
          id="accordion-flush-body-3"
          class="hidden"
          aria-labelledby="accordion-flush-heading-3"
        >
          <div class="py-8 px-3 lg:px-10 text-sm">
            <p>
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
            <p class="pt-6">
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
          </div>
        </div>
        <h3 id="accordion-flush-heading-4">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 px-3 lg:px-10 mb-5 text-sm font-medium text-left text-gray-500 border border-black rounded"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>What is the best way to create a saas business today?</span>
            <Plus />
          </button>
        </h3>
        <div
          id="accordion-flush-body-4"
          class="hidden"
          aria-labelledby="accordion-flush-heading-4"
        >
          <div class="py-8 px-3 lg:px-10 text-sm">
            <p>
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
            <p class="pt-6">
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
          </div>
        </div>
        <h3 id="accordion-flush-heading-5">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 px-3 lg:px-10 text-sm font-medium text-left text-gray-500 border border-black rounded"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>What is the best way to create a saas business today?</span>
            <Plus />
          </button>
        </h3>
        <div
          id="accordion-flush-body-5"
          class="hidden"
          aria-labelledby="accordion-flush-heading-5"
        >
          <div class="py-8 px-3 lg:px-10 text-sm">
            <p>
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
            <p class="pt-6">
              Launch a business today with our help and get it done with amazing
              launch features, websites and more with uifry. We help business
              like yours thrive every day and beyond. Launch a business today
              with our help and get it done with amazing launch features,
              websites and more with uifry. We help business like yours thrive
              every day and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex py-4 justify-center items-center">
      <a href="#" class="text-sm px-4 lg:px-6 py-3 rounded bg-secondary"
        >Contact Now</a
      >
      <div class="ml-5 p-2 border border-secondary"><ChevronRight /></div>
      <a href="#" class="text-sm px-6 py-3">Book a Demo Today</a>
    </div>
  </div>
</template>
