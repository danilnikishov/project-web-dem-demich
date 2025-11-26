<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import CardList from '@/components/CardList.vue'

const favorites = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://979d8529bdcc0291.mokky.dev/favorites?_relations=items',
    )

    favorites.value = data.map((obj) => obj.item)
  } catch (err) {
    console.log(err)
  }
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
    <!-- Заголовок с кнопкой назад -->
    <div class="flex items-center gap-4 mb-6 sm:mb-8">
      <button
        @click="goBack"
        class="flex items-center gap-2 text-slate-400 hover:text-black transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span class="text-sm sm:text-base">Назад</span>
      </button>
    </div>

    <!-- Контент закладок -->
    <div class="max-w-6xl mx-auto">
      <div
        v-if="favorites.length === 0"
        class="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20"
      >
        <div class="text-center">
          <div
            class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Закладок пока нет</h3>
          <p class="text-gray-500 mb-6">Добавляйте товары в закладки, чтобы не потерять</p>
          <router-link
            to="/"
            class="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
          >
            Перейти к покупкам
          </router-link>
        </div>
      </div>

      <div v-else>
        <h2 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Мои закладки</h2>
        <div class="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm">
          <CardList :items="favorites" is-favorites />
        </div>
      </div>
    </div>
  </div>
</template>
