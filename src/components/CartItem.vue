<script setup>
const emit = defineEmits(['onClickRemove'])

defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
})
</script>

<template>
  <div
    class="flex items-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 border border-slate-200 rounded-xl hover:shadow-md transition-all duration-300 bg-white"
  >
    <!-- Адаптивное изображение товара -->
    <img
      :src="imageUrl"
      :alt="title"
      class="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 shrink-0 object-contain rounded-xl bg-gray-50 p-2 sm:p-3 shadow-sm"
    />

    <!-- Информация о товаре -->
    <div class="flex-1 min-w-0">
      <h3
        class="font-semibold text-gray-800 text-base xs:text-lg sm:text-xl md:text-2xl line-clamp-2 mb-2 sm:mb-3 leading-tight"
      >
        {{ title }}
      </h3>
      <p class="text-xl sm:text-2xl md:text-3xl font-bold text-lime-600">{{ price }} руб.</p>
    </div>

    <!-- Кнопка удаления -->
    <button
      @click="emit('onClickRemove')"
      class="shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-500 rounded-lg transition-all duration-200 group hover:scale-105"
      aria-label="Удалить из корзины"
    >
      <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  </div>
</template>
