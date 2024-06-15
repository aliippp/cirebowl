<script setup lang="ts">
import type { Food } from '@/utils/types'
import { RouterLink } from 'vue-router'
type PropTypes = {
  food: Food
}

defineProps<PropTypes>()
</script>

<template>
  <RouterLink :to="{ name: 'food', params: { id: food.id } }">
    <div class="card">
      <div class="card-image">
        <figure class="image is-16by9 is-clickable">
          <img
            src="https://bulma.io/assets/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4 mb-2">{{ food.name }}</p>
        <p class="subtitle is-6">
          {{ food.description }}
          <br /><br />Starting from ${{ food.price.toFixed(2) }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>
