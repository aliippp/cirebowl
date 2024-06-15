import type { Food } from '@/utils/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  size: string
  options: string
  qty: number
}

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([])

  function addToCart(food: Food, size: string, options: string, qty: number) {
    if (
      cart.value.some(
        (item) => item.name === food.name && item.size === size && item.options === options
      )
    ) {
      const index = cart.value.findIndex(
        (item) => item.name === food.name && item.size === size && item.options === options
      )
      cart.value[index].qty += qty
    } else {
      cart.value.push({
        id: cart.value.length + 1,
        name: food.name,
        price: food.price,
        size,
        options,
        qty
      })
    }
  }

  function removeItem(id: number) {
    const index = cart.value.findIndex((item) => item.id === id)
    cart.value.splice(index, 1)
  }

  function clearCart() {
    cart.value = []
  }

  return {
    cart,
    addToCart,
    removeItem,
    clearCart
  }
})
