<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  totalPrice: Number,
})

const route = useRoute()
const menuOpen = ref(false)

const showMaleTab = ref(true)
const showFemaleTab = ref(true)
const showHomeTab = ref(false)

watch(
  () => route.path,
  (newPath) => {
    showMaleTab.value = newPath !== '/menshoes'
    showFemaleTab.value = newPath !== '/womanshoes'
    showHomeTab.value = newPath !== '/'
  },
  { immediate: true },
)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header
    class="flex justify-between items-center border-b border-slate-200 px-4 py-4 sm:px-6 md:px-8 lg:px-10 md:py-5 relative bg-white z-50"
  >
    <!-- Логотип - УВЕЛИЧИЛ МАКСИМАЛЬНУЮ ШИРИНУ ДЛЯ НАЗВАНИЯ -->
    <router-link
      to="/"
      class="flex items-center gap-3 sm:gap-4 shrink-0 max-w-[60%] md:max-w-[70%] lg:max-w-none"
    >
      <img
        src="/logo_2-Photoroom.png"
        alt="Logo"
        class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
      />
      <div class="min-w-0">
        <!-- УВЕЛИЧИЛ РАЗМЕР ШРИФТА И УБРАЛ TRUNCATE -->
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold uppercase">street fashionista</h2>
        <p class="text-xs sm:text-sm text-slate-400 hidden md:block">
          Только лучшая обувь для тебя
        </p>
      </div>
    </router-link>

    <!-- Десктоп меню -->
    <nav class="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-8 flex-wrap justify-end">
      <router-link
        v-if="showHomeTab"
        to="/"
        class="cursor-pointer hover:text-black text-sm lg:text-base xl:text-lg transition-colors whitespace-nowrap px-2 py-1"
      >
        Главная
      </router-link>

      <router-link
        v-if="showMaleTab"
        to="/menshoes"
        class="cursor-pointer hover:text-black text-sm lg:text-base xl:text-lg transition-colors whitespace-nowrap px-2 py-1"
      >
        Мужская обувь
      </router-link>

      <router-link
        v-if="showFemaleTab"
        to="/womanshoes"
        class="cursor-pointer hover:text-black text-sm lg:text-base xl:text-lg transition-colors whitespace-nowrap px-2 py-1"
      >
        Женская обувь
      </router-link>

      <router-link
        to="/favorites"
        class="flex items-center gap-2 cursor-pointer hover:text-black text-sm lg:text-base xl:text-lg transition-colors whitespace-nowrap px-2 py-1"
      >
        <img src="/heart.svg" class="w-4 h-4 lg:w-5 lg:h-5" alt="Закладки" />
        <span>Закладки</span>
      </router-link>

      <!-- КОРЗИНА БЕЗ ЗЕЛЕНОГО ФОНА -->
      <router-link
        to="/drawer"
        class="flex items-center gap-2 cursor-pointer hover:text-black text-sm lg:text-base xl:text-lg whitespace-nowrap px-2 py-1 transition-colors"
      >
        <img src="/cart.svg" class="w-4 h-4 lg:w-5 lg:h-5" alt="Корзина" />
        <b class="text-gray-700">{{ totalPrice }} руб.</b>
      </router-link>
    </nav>

    <!-- Бургер кнопка -->
    <button
      @click="toggleMenu"
      class="md:hidden flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      :aria-expanded="menuOpen"
      aria-label="Меню"
    >
      <img
        :src="menuOpen ? '/close.svg' : '/burger-menu-svgrepo-com.svg'"
        :alt="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
        class="w-5 h-5"
      />
    </button>

    <!-- Мобильное меню -->
    <div
      v-if="menuOpen"
      class="fixed inset-0 top-0 left-0 bg-black opacity-70 z-40 md:hidden"
      @click="closeMenu"
    ></div>

    <nav
      v-if="menuOpen"
      class="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto transform transition-transform duration-300"
    >
      <!-- Заголовок мобильного меню с кнопкой закрытия -->
      <div class="flex justify-between items-center p-4 border-b border-slate-200">
        <h3 class="text-lg font-bold">Меню</h3>
        <button
          @click="closeMenu"
          class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          aria-label="Закрыть меню"
        >
          <img src="/close.svg" alt="Закрыть" class="w-4 h-4" />
        </button>
      </div>

      <ul class="flex flex-col p-4 gap-3">
        <li>
          <router-link
            v-if="showHomeTab"
            to="/"
            @click="closeMenu"
            class="block py-3 px-4 cursor-pointer hover:bg-gray-50 rounded-lg text-base font-medium transition-colors"
          >
            Главная
          </router-link>
        </li>

        <li>
          <router-link
            v-if="showMaleTab"
            to="/menshoes"
            @click="closeMenu"
            class="block py-3 px-4 cursor-pointer hover:bg-gray-50 rounded-lg text-base font-medium transition-colors"
          >
            Мужская обувь
          </router-link>
        </li>

        <li>
          <router-link
            v-if="showFemaleTab"
            to="/womanshoes"
            @click="closeMenu"
            class="block py-3 px-4 cursor-pointer hover:bg-gray-50 rounded-lg text-base font-medium transition-colors"
          >
            Женская обувь
          </router-link>
        </li>

        <li>
          <router-link
            to="/favorites"
            @click="closeMenu"
            class="flex items-center gap-3 py-3 px-4 cursor-pointer hover:bg-gray-50 rounded-lg text-base font-medium transition-colors"
          >
            <img src="/heart.svg" class="w-5 h-5" alt="Закладки" />
            <span>Закладки</span>
          </router-link>
        </li>

        <li>
          <!-- КОРЗИНА В МОБИЛЬНОМ МЕНЮ БЕЗ ЗЕЛЕНОГО ФОНА -->
          <router-link
            to="/drawer"
            @click="closeMenu"
            class="flex items-center gap-3 w-full py-3 px-4 cursor-pointer rounded-lg text-base font-medium transition-colors hover:bg-gray-50"
          >
            <img src="/cart.svg" class="w-5 h-5" alt="Корзина" />
            <span
              >Корзина: <b class="text-gray-700">{{ totalPrice }} руб.</b></span
            >
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
