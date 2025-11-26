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
    class="relative bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <!-- Иконка избранного - УВЕЛИЧЕНА -->
    <img
      v-if="onClickFavorite"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like 1"
      class="absolute top-3 left-3 w-7 h-7 sm:top-4 sm:left-4 sm:w-8 sm:h-8 md:top-6 md:left-6 md:w-9 md:h-9 lg:top-8 lg:left-8 lg:w-10 lg:h-10 z-10 hover:scale-110 transition-transform"
      @click="onClickFavorite"
    />

    <!-- Изображение товара - УВЕЛИЧЕНО -->
    <img
      :src="imageUrl"
      alt="sneaker"
      class="w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 mx-auto object-contain mb-4"
    />

    <!-- Название - УВЕЛИЧЕНО -->
    <p
      class="mt-2 text-base xs:text-lg sm:text-xl md:text-2xl font-medium line-clamp-2 text-gray-800 min-h-12 flex items-center"
    >
      {{ title }}
    </p>

    <div class="flex justify-between items-center mt-4 sm:mt-5 md:mt-6">
      <div class="flex flex-col">
        <span class="text-slate-400 text-sm sm:text-base md:text-lg">Цена:</span>
        <b class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900">{{ price }} руб.</b>
      </div>

      <!-- Иконка добавления - УВЕЛИЧЕНА -->
      <img
        v-if="onClickAdd"
        @click="onClickAdd"
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="Plus"
        class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 hover:scale-110 transition-transform cursor-pointer"
      />
    </div>
  </div>
</template>
