<script setup>
import { inject } from 'vue'

const { closeDrawer } = inject('cart')
</script>

<template>
  <div class="flex items-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-7 md:mb-8">
    <svg
      @click="closeDrawer"
      class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition hover:-translate-x-0.5 sm:hover:-translate-x-1 shrink-0"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="{
        'w-4 h-4': true,
        'sm:w-5 sm:h-5': true,
      }"
    >
      <path
        d="M1 7H14.7143"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.71436 1L14.7144 7L8.71436 13"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold truncate">Корзина</h2>
  </div>
</template>
