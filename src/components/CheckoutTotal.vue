<script setup lang="ts">
import { computed } from 'vue'

interface PropType {
  id: number
  name: string
  price: number
  size: string
  option: string
  qty: number
}

const props = defineProps<PropType>()

const totalPrice = computed((): number => {
  return props.qty * props.price
})
</script>

<template>
  <div class="card my-2">
    <div class="card-content">
      <p>{{ props.name }}</p>
      <p>{{ props.size }} | {{ props.option }}</p>
      <div class="columns">
        <p class="column">{{ props.qty }} x $ {{ props.price.toFixed(2) }}</p>
        <p class="column has-text-right">$ {{ totalPrice.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
