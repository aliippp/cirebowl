<script setup lang="ts">
import FoodCard from '@/components/FoodCard.vue'
import { onMounted, ref } from 'vue'
import type { Food } from '@/utils/types'
import { useFoodStore } from '@/stores/foodStore'
const foods = ref<Food[]>([])
const foodStore = useFoodStore()

onMounted(() => {
  const foodData = foodStore.foodData
  foods.value = foodData
})
</script>

<template>
  <section class="section is-small">
    <h1 class="title">Our Fresh Cooked Meals</h1>
    <h2 class="subtitle">Homemade Tasteful Foods Fresh From Our Kitchen.</h2>

    <div class="columns mt-3">
      <div class="column">
        <div class="fixed-grid has-3-cols">
          <div class="grid">
            <div class="cell" v-for="food in foods" :key="food.name">
              <FoodCard :food="food" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
