<script setup>
import { reactive } from 'vue'
import { inject, watch, ref, onMounted } from 'vue'
import CardList from '@/components/CardList.vue'
import axios from 'axios'
import debounce from 'lodash.debounce'

const { cart, addToCart, removeFromCart } = inject('cart')

const items = ref([])

const filters = reactive({
  searchQuery: '',
  category: '',
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

//2
const onChangeCategory = (event) => {
  filters.category = event.target.value
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

    if (filters.category) {
      params.category = filters.category
    }

    const { data } = await axios.get(`https://979d8529bdcc0291.mokky.dev/items`, {
      params,
    })

    const filtered = !filters.category
      ? data.filter((item) => item.category === 'womanwinter' || item.category === 'womansport')
      : data

    items.value = filtered.map((obj) => ({
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
  <div class="px-4 sm:px-6 md:px-8 lg:px-10">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8 mt-4 sm:mt-5"
    >
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">Вся женская обувь</h2>

      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <div class="relative w-full sm:w-64">
          <img
            class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
            src="/search.svg"
            alt="Поиск"
          />
          <input
            @input="onChangeSearchInput"
            class="w-full border border-gray-200 rounded-md py-2 sm:py-2 pl-9 sm:pl-10 pr-4 outline-none focus:border-gray-400 placeholder-gray-400 text-sm sm:text-base"
            placeholder="Поиск..."
          />
        </div>

        <div class="flex gap-3 sm:gap-2 w-full sm:w-auto">
          <select
            @change="onChangeSelect"
            class="py-2 px-3 border border-gray-200 rounded-md outline-none w-full sm:w-auto text-sm sm:text-base flex-1"
          >
            <option value="">По умолчанию</option>
            <option value="price">Сначала дешевле</option>
            <option value="-price">Сначала дороже</option>
          </select>

          <!-- 1 -->
          <select
            @change="onChangeCategory"
            class="py-2 px-3 border border-gray-200 rounded-md outline-none w-full sm:w-auto text-sm sm:text-base flex-1"
          >
            <option value="">Все</option>
            <option value="womanwinter">Зимняя обувь</option>
            <option value="womansport">Спортивные кроссовки</option>
          </select>
        </div>
      </div>
    </div>

    <div class="mt-6 sm:mt-8 md:mt-10">
      <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus" />
    </div>
  </div>
</template>
