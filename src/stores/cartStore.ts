import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

interface CartItem {
  id: number
  name: string
  price: number
  size: string
  options: string
  qty: number
}

export const useCartStore = defineStore('cart', () => {
  const toast = useToast()
  const cart = ref<CartItem[]>([])

  function addToCart(name: string, price: number, size: string, options: string, qty: number) {
    if (
      cart.value.some(
        (item) => item.name === name && item.size === size && item.options === options
      )
    ) {
      const index = cart.value.findIndex(
        (item) => item.name === name && item.size === size && item.options === options
      )
      cart.value[index].qty += qty
    } else {
      cart.value.push({
        id: cart.value.length + 1,
        name,
        price,
        size,
        options,
        qty
      })
    }
    toast.success('Item added to cart')
  }

  function removeItem(id: number) {
    const index = cart.value.findIndex((item) => item.id === id)
    cart.value.splice(index, 1)
  }

  function clearCart() {
    cart.value = []
  }

  function incrementQty(id: number) {
    cart.value.find((item) => item.id === id)!.qty++
  }

  function decrementQty(id: number) {
    if (cart.value.find((item) => item.id === id)!.qty > 1) {
      cart.value.find((item) => item.id === id)!.qty--
    }
  }

  return {
    cart,
    addToCart,
    removeItem,
    incrementQty,
    decrementQty,
    clearCart
  }
},  {
  persist: true
})
