<template>
  <div>
    <!-- Банер (только на десктопе) -->
    <div class="hidden md:block">
      <div
        class="relative w-full h-40 sm:h-60 md:h-72 lg:h-96 xl:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl"
      >
        <img src="/sl.jpg" alt="Photo" class="w-full h-full object-cover" />

        <div class="absolute bottom-3 sm:bottom-6 md:bottom-8 left-3 sm:left-6 md:left-10">
          <div class="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
            <h2
              class="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg sm:drop-shadow-2xl tracking-tight sm:tracking-wide mb-1 sm:mb-2 transform transition-all duration-300"
            >
              Пришло время утеплиться
            </h2>
            <router-link to="/menshoes">
              <button
                class="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 font-semibold py-1.5 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 rounded-lg sm:rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 ease-in-out shadow-md sm:shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs sm:text-sm md:text-base tracking-tight sm:tracking-wide border border-gray-200 hover:border-gray-300 w-fit mt-1 sm:mt-2 md:mt-3"
              >
                Мужская обувь
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Блоки мужская/женская обувь (только на мобильных) -->
    <div class="md:hidden grid grid-cols-2 gap-4 p-4">
      <!-- Мужская обувь -->
      <router-link
        to="/menshoes"
        class="relative rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 overflow-hidden group"
      >
        <!-- Фоновая картинка для мужской обуви -->
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/мобил_1.jpg')"
        ></div>
        <!-- Затемнение для читаемости текста -->
        <div
          class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"
        ></div>

        <div class="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h3 class="font-bold text-lg mb-2 drop-shadow-lg">Мужская</h3>
          <p class="text-sm opacity-90 drop-shadow-lg">Кроссовки и обувь</p>
        </div>
      </router-link>

      <!-- Женская обувь -->
      <router-link
        to="/womanshoes"
        class="relative rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 overflow-hidden group"
      >
        <!-- Фоновая картинка для женской обуви -->
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/womens-shoes-bg.jpg')"
        ></div>
        <!-- Затемнение для читаемости текста -->
        <div
          class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"
        ></div>

        <div class="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h3 class="font-bold text-lg mb-2 drop-shadow-lg">Женская</h3>
          <p class="text-sm opacity-90 drop-shadow-lg">Кроссовки и обувь</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
