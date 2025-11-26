<script setup>
import { reactive } from 'vue'
import { inject, watch, ref, onMounted } from 'vue'
import CardList from '@/components/CardList.vue'
import axios from 'axios'
import debounce from 'lodash.debounce'
import Slider from '@/components/Slider.vue'

const { cart, addToCart, removeFromCart } = inject('cart')

const items = ref([])

const filters = reactive({
  sortBy: '',
  searchQuery: '',
})

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = debounce((event) => {
  filters.searchQuery = event.target.value
}, 500)

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id,
      }

      item.isFavorite = true

      const { data } = await axios.post(`https://979d8529bdcc0291.mokky.dev/favorites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://979d8529bdcc0291.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://979d8529bdcc0291.mokky.dev/favorites`)

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// Запрос всех товаров
const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://979d8529bdcc0291.mokky.dev/items`, {
      params,
    })

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false,
    }))
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  await fetchItems()
  await fetchFavorites()

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }))
})

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }))
})

watch(filters, fetchItems)
</script>

<template>
  <div>
    <Slider />
  </div>

  <div class="px-4 sm:px-6 md:px-8 lg:px-10">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
    >
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 mt-4 sm:mt-5">
        Вся обувь
      </h2>

      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <div class="relative w-full sm:w-64">
          <img
            class="absolute left-3 top-3 sm:top-4 w-4 h-4 sm:w-5 sm:h-5"
            src="/search.svg"
            alt="Поиск"
          />
          <input
            @input="onChangeSearchInput"
            class="border border-gray-200 rounded-md py-2 sm:py-2 pl-10 sm:pl-11 pr-4 w-full outline-none focus:border-gray-400 text-sm sm:text-base"
            placeholder="Поиск..."
          />
        </div>
        <!-- <select
          @change="onChangeSelect"
          class="py-2 px-3 border border-gray-200 rounded-md outline-none w-full sm:w-auto text-sm sm:text-base"
        >
          <option value="">По умолчанию</option>
          <option value="price">По возрастанию цены</option>
          <option value="-price">По убыванию цены</option>
        </select> -->
        <select
          @change="onChangeSelect"
          class="py-3 px-4 text-base <!-- мобильный: крупнее --> border border-gray-200 rounded-md outline-none w-full sm:py-2 sm:px-3 sm:text-sm <!-- начиная с sm: вернуть прежний размер --> sm:w-auto"
        >
          <option value="">По умолчанию</option>
          <option value="price">По возрастанию цены</option>
          <option value="-price">По убыванию цены</option>
        </select>
      </div>
    </div>

    <div class="mt-6 sm:mt-8 md:mt-10">
      <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus" />
    </div>
  </div>
</template>
