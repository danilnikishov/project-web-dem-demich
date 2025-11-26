<!-- <template>
  <div>

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


    <div class="md:hidden grid grid-cols-2 gap-4 p-4">

      <router-link
        to="/menshoes"
        class="relative rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 overflow-hidden group"
      >

        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/мобил_1.jpg')"
        ></div>

        <div
          class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"
        ></div>

        <div class="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h3 class="font-bold text-lg mb-2 drop-shadow-lg">Мужская</h3>
          <p class="text-sm opacity-90 drop-shadow-lg">Кроссовки и обувь</p>
        </div>
      </router-link>


      <router-link
        to="/womanshoes"
        class="relative rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 overflow-hidden group"
      >

        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/womens-shoes-bg.jpg')"
        ></div>

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
</template> -->

<template>
  <div>
    <!-- Баннер (только на десктопе) -->
    <div class="hidden md:block">
      <div
        class="relative w-full h-40 sm:h-60 md:h-72 lg:h-96 xl:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl"
      >
        <img src="/sl.jpg" alt="Photo" class="w-full h-full object-cover" />

        <div class="absolute bottom-3 sm:bottom-6 md:bottom-8 left-3 sm:left-6 md:left-10">
          <div class="flex flex-col space-y-2 md:space-y-3 lg:space-y-4">
            <h2
              class="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-xl tracking-tight"
            >
              Пришло время утеплиться
            </h2>

            <router-link to="/menshoes">
              <button
                class="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 font-semibold py-2 px-4 md:py-3 md:px-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                Мужская обувь
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Мобильная версия — ИЗОБРАЖЕНИЕ НЕ ФОН! -->
    <div class="md:hidden flex flex-col gap-6 p-4">
      <!-- Мужская обувь -->
      <router-link to="/menshoes" class="flex flex-col gap-3 active:scale-95 transition-all">
        <h3 class="text-xl font-bold text-gray-900">Мужская обувь</h3>

        <div class="rounded-xl overflow-hidden shadow-lg">
          <img src="/mobil1.jpg" alt="Мужская обувь" class="w-full h-48 object-cover" />
        </div>
      </router-link>

      <!-- Женская обувь -->
      <router-link to="/womanshoes" class="flex flex-col gap-3 active:scale-95 transition-all">
        <h3 class="text-xl font-bold text-gray-900">Женская обувь</h3>

        <div class="rounded-xl overflow-hidden shadow-lg">
          <img src="/mobil2.jpg" alt="Женская обувь" class="w-full h-48 object-cover" />
        </div>
      </router-link>
    </div>
  </div>
</template>
