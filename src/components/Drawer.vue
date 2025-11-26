<script setup>
import axios from 'axios'
import { ref, computed, inject } from 'vue'
import CartItemList from './CartItemList.vue'
import InfoBlock from './InfoBlock.vue'

const { cart } = inject('cart')

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const isCreatingOrder = ref(false)
const orderID = ref(null)

const createOrder = async () => {
  try {
    isCreatingOrder.value = true
    const { data } = await axios.post(`https://979d8529bdcc0291.mokky.dev/orders`, {
      items: cart.value,
      totalPrice: totalPrice.value,
    })

    cart.value = []
    orderID.value = data.id
  } catch (err) {
    console.log(err)
  } finally {
    isCreatingOrder.value = false
  }
}

const cartIsEmpty = computed(() => cart.value.length === 0)
const cartButtonDisabled = computed(() => isCreatingOrder.value || cartIsEmpty.value)
</script>

<template>
  <div class="min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
    <!-- Заголовок -->
    <div class="flex items-center gap-4 mb-6 sm:mb-8">
      <router-link
        to="/"
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
      </router-link>
    </div>

    <!-- Контент -->
    <div class="max-w-6xl mx-auto">
      <div
        v-if="cartIsEmpty && !orderID"
        class="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20"
      >
        <InfoBlock
          title="Корзина пустая"
          description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
          image-url="/package-icon.png"
        />
        <router-link
          to="/"
          class="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base font-medium"
        >
          Перейти к покупкам
        </router-link>
      </div>

      <div
        v-else-if="orderID"
        class="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20"
      >
        <InfoBlock
          title="Заказ оформлен!"
          :description="`Ваш заказ #${orderID} скоро будет передан курьерской доставке`"
          image-url="/order-success-icon.png"
        />
        <router-link
          to="/"
          class="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base font-medium"
        >
          Вернуться на главную
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8">
        <!-- Список товаров -->
        <div class="xl:col-span-3">
          <div class="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm">
            <h2 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800">
              Товары в корзине
            </h2>
            <CartItemList />
          </div>
        </div>

        <!-- Итоги заказа -->
        <div class="xl:col-span-1">
          <div
            class="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm sticky top-6"
          >
            <h2 class="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800">Итоги заказа</h2>

            <div class="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              <div class="flex justify-between items-center text-base sm:text-lg">
                <span class="text-slate-700 font-medium">Товары:</span>
                <span class="font-semibold text-gray-900">{{ cart.length }} шт.</span>
              </div>

              <div class="border-t border-slate-200 pt-4 sm:pt-5">
                <div class="flex justify-between items-center text-lg sm:text-xl font-bold">
                  <span class="text-gray-900">Итого:</span>
                  <span class="text-xl sm:text-2xl text-lime-600">{{ totalPrice }} руб.</span>
                </div>
              </div>
            </div>

            <button
              :disabled="cartButtonDisabled"
              @click="createOrder"
              class="w-full bg-lime-500 text-white py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg disabled:bg-slate-400 hover:bg-lime-600 active:bg-lime-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span v-if="!isCreatingOrder" class="flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Оформить заказ
              </span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                    fill="none"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Оформляем...
              </span>
            </button>

            <!-- Дополнительная информация -->
            <div class="mt-4 text-xs sm:text-sm text-slate-500 text-center">
              <p>Бесплатная доставка от 5000 руб.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
