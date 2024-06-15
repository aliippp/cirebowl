<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { ref } from 'vue'

interface PropType {
  id: number
  name: string
  size: string
  option: string
  qty: number
}

const cartStore = useCartStore()

const props = defineProps<PropType>()
const qty = ref(props.qty)

const increment = () => {
  qty.value++
}

const decrement = () => {
  if (qty.value > 1) {
    qty.value--
  }
}
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt="" />
      </aside>

      <div class="media-content">
        <p class="title is-4 is-spaced">{{ props.name }}</p>
        <p class="subtitle is-6">{{ props.size }} | {{ Object.keys(props.option)[0] }}</p>
        <div class="buttons mt-6">
          <div class="buttons has-addons">
            <button class="button" @click="decrement" :class="{ 'is-light': qty === 1 }">-</button>
            <span class="button">{{ qty }}</span>
            <button class="button" @click="increment">+</button>
          </div>
          <button class="button is-danger is-light" @click="cartStore.removeItem(props.id)">
            Remove
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
