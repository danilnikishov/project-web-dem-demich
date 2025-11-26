<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8 sm:py-12 relative overflow-hidden"
  >
    <!-- Декоративные элементы -->
    <img
      src="/404/Oops!.png"
      alt="Top Left"
      class="absolute top-2 left-2 w-16 sm:w-20 md:w-24 lg:w-32 m-2 sm:m-4 opacity-80"
    />

    <!-- Основной контент -->
    <div class="flex flex-col items-center text-center max-w-md sm:max-w-lg md:max-w-xl">
      <img
        src="/404/Frame.png"
        alt="Oops"
        class="w-48 sm:w-56 md:w-72 lg:w-96 mb-4 sm:mb-6 mt-8 sm:mt-12 md:mt-16"
      />

      <h1
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800 px-4"
      >
        Страница не найдена
      </h1>

      <p class="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4 leading-relaxed">
        Кажется, такой страницы не существует или она была перемещена
      </p>

      <router-link
        to="/"
        class="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-base font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        Вернуться на главную
      </router-link>
    </div>

    <!-- Дополнительный декоративный элемент (опционально) -->
    <img
      src="/404/Oops!.png"
      alt="Bottom Right"
      class="absolute bottom-2 right-2 w-12 sm:w-16 md:w-20 lg:w-24 m-2 sm:m-4 opacity-60 rotate-180"
    />
  </div>
</template>
