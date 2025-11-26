<script setup>
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'
import Footer from './components/Footer.vue'

import { ref, watch, provide, computed } from 'vue'

const cart = ref([])

const drawerOpen = ref(false)

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true },
)

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart,
})
</script>

<template>
  <Drawer v-if="drawerOpen" :total-price="totalPrice" :vat-price="vatPrice" />

  <!-- wrapper -->
  <div class="min-h-screen flex flex-col bg-white shadow-xl m-auto w-full">
    <Header :total-price="totalPrice" @open-drawer="openDrawer" />

    <div class="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 flex-1">
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>
