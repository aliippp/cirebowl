<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'

interface PropType {
  id: number
  name: string
  size: string
  option: string
  qty: number
}

const cartStore = useCartStore()

const props = defineProps<PropType>()
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt="" />
      </aside>

      <div class="media-content">
        <p class="title is-4 is-spaced">{{ props.name }}</p>
        <p class="subtitle is-6">{{ props.size }} | {{ props.option }}</p>
        <div class="buttons mt-6">
          <div class="buttons has-addons">
            <button
              class="button"
              @click="cartStore.decrementQty(props.id)"
              :class="{ 'is-light': qty === 1 }"
            >
              -
            </button>
            <span class="button">{{ props.qty }}</span>
            <button
              class="button"
              @click="cartStore.incrementQty(props.id)"
            >
              +
            </button>
          </div>
          <button class="button is-danger is-light" @click="cartStore.removeItem(props.id)">
            Remove
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
