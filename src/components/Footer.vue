<template>
  <footer class="bg-gray-900 text-gray-300 py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto">
      <!-- Основной контент -->
      <div class="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-10 mb-6 md:mb-8">
        <!-- Бренды -->
        <div class="flex-1 max-w-md">
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-3 sm:mb-4 text-white">
            street fashionista
          </h2>
          <ul class="space-y-2 sm:space-y-3">
            <li
              v-for="brand in brands"
              :key="brand"
              class="hover:text-white transition-colors text-sm sm:text-base uppercase text-gray-400 cursor-pointer"
            >
              {{ brand }}
            </li>
          </ul>
        </div>

        <div class="flex-1 max-w-md">
          <h3 class="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-3 sm:mb-4 text-white">
            Полезная информация
          </h3>
          <p class="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
            Данный сайт разработан в рамках учебного задания и не несет коммерческой ценности. Все
            товары и бренды используются в демонстрационных целях.
          </p>
        </div>
        <div class="flex-1 max-w-md lg:text-right">
          <h3 class="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-3 sm:mb-4 text-white">
            Контакты
          </h3>
          <ul class="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-400">
            <li class="flex items-center lg:justify-end gap-2">
              <span>example@example.com</span>
              <span>example@example.com</span>
              <span>example@example.com</span>
            </li>
            <li class="flex items-center lg:justify-end gap-2"></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-4 sm:pt-6">
        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-gray-500"
        >
          <div class="flex gap-4">
            <a href="#" class="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" class="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const brands = ['Nike', 'Puma', 'Fila', 'Columbia', 'Adidas', 'Reebok']
</script>
