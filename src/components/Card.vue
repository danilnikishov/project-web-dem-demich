<script setup>
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 cursor-pointer transition hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-md sm:hover:shadow-xl"
  >
    <img
      v-if="onClickFavorite"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
      class="absolute top-2 left-2 w-5 h-5 sm:top-4 sm:left-4 sm:w-6 sm:h-6 md:top-6 md:left-6 md:w-7 md:h-7 lg:top-8 lg:left-8"
      @click="onClickFavorite"
    />

    <img
      :src="imageUrl"
      alt="sneaker"
      class="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto object-contain"
    />

    <p class="mt-2 text-sm sm:text-base md:text-lg font-medium line-clamp-2">{{ title }}</p>

    <div class="flex justify-between items-center mt-3 sm:mt-4 md:mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400 text-xs sm:text-sm md:text-base">Цена:</span>
        <b class="text-sm sm:text-base md:text-lg lg:text-xl">{{ price }} руб.</b>
      </div>

      <img
        v-if="onClickAdd"
        @click="onClickAdd"
        :src="!isAdded ? '/plus.svg' : 'checked.svg'"
        alt="Plus"
        class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
      />
    </div>
  </div>
</template>
