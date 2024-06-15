<script setup lang="ts">
import CheckoutCard from '@/components/CheckoutCard.vue'
import CheckoutTotal from '@/components/CheckoutTotal.vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const items = cartStore.cart
</script>

<template>
  <main class="section">
    <h1 class="title my-4">Checkout</h1>

    <div class="columns">
      <div class="column">
        <div class="columns is-multiline">
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

      <div class="column is-one-quarter">
        <article class="box">
          <p class="title is-5 my-3">Total Amount</p>
          <CheckoutTotal
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :size="item.size"
            :option="item.options"
            :qty="item.qty"
          />

          <button class="button is-primary is-fullwidth my-3">Checkout</button>
        </article>
      </div>
    </div>
  </main>
</template>
