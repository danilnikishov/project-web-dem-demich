<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String,
})
</script>

<template>
  <div
    class="flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto px-4"
  >
    <img
      :src="imageUrl"
      alt="Info image"
      class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
    />
    <h2 class="mt-3 sm:mt-4 md:mt-5 text-xl sm:text-2xl md:text-3xl font-medium">{{ title }}</h2>
    <p
      class="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg leading-relaxed max-w-[280px] sm:max-w-xs"
    >
      {{ description }}
    </p>
  </div>
</template>
