<script setup lang="ts">
import CheckoutCard from '@/components/CheckoutCard.vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const items = cartStore.cart
</script>

<template>
  <main class="section">
    <h1 class="title my-4">Checkout</h1>

    <div class="columns">
      <div class="column">
          <div class="column is-full" v-for="item in items" :key="item.id">
            <CheckoutCard
              :id="item.id"
              :name="item.name"
              :size="item.size"
              :option="item.options"
              :qty="item.qty"
            />
        </div>
      </div>
    </div>
  </main>
</template>
