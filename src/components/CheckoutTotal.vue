<script setup lang="ts">
import { computed } from 'vue'

interface PropType {
  id: number
  name: string
  size: string
  option: string
  qty: number
}

const props = defineProps<PropType>()

const totalPrice = computed((): number => {
  return props.qty * Number(Object.values(props.option)[0])
})
</script>

<template>
  <div class="card my-2">
    <div class="card-content">
      <p>{{ props.name }}</p>
      <p>{{ props.size }} | {{ Object.keys(props.option)[0] }}</p>
      <div class="columns">
        <p class="column">
          {{ props.qty }} x $ {{ Number(Object.values(props.option)[0]).toFixed(2) }}
        </p>
        <p class="column has-text-right">$ {{ totalPrice.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>
