<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { useFoodStore } from '@/stores/foodStore'
import type { Food } from '@/utils/types'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const foodStore = useFoodStore()
const cartStore = useCartStore()
const route = useRoute()
const sizeActiveButton = ref(0)
const optionActiveButton = ref(0)
const sizes = ref<Array<{ [key: string]: number }>>([{ Small: 2 }, { Medium: 5 }, { Large: 7 }])
const food = ref<Food>()

const size = ref('Small')

const setSizeActiveButton = (index: number) => {
  sizeActiveButton.value = index
  size.value = Object.keys(sizes.value[index])[0]
  qty.value = 1
}

const option = ref()

const setOptionActiveButton = (index: number) => {
  optionActiveButton.value = index
  qty.value = 1
}

const qty = ref(1)

const increment = () => {
  qty.value++
}

const decrement = () => {
  if (qty.value > 1) {
    qty.value--
  }
}

onMounted(() => {
  food.value = foodStore.foodData.find((f) => f.id === route.params.id)
  option.value = food.value?.options[0]
})

const totalPrice = computed((): number | undefined => {
  if (food.value && food.value.options[optionActiveButton.value]) {
    const foodPrice = Object.values(sizes.value[sizeActiveButton.value])[0]
    const optionPrice = Object.values(food.value.options[optionActiveButton.value])[0] || 0
    return (foodPrice + optionPrice) * qty.value
  }
  return 0
})
</script>

<template>
  <section class="section is-small">
    <div class="container">
      <div class="columns">
        <div class="column">
          <figure class="image is-16by9">
            <img
              src="https://bulma.io/assets/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="column">
          <div class="content">
            <h1 class="title">{{ food?.name }}</h1>
            <p class="subtitle">
              {{ food?.description }}
            </p>
            <h2>Size</h2>
            <div class="buttons are-small">
              <button
                class="button"
                v-for="(size, index) in sizes"
                :key="index"
                @click="setSizeActiveButton(index)"
                :class="{ 'is-active': sizeActiveButton === index }"
              >
                {{ Object.keys(size)[0] }}
              </button>
            </div>
            <h3>Main dishes</h3>
            <div class="buttons are-small">
              <button
                class="button"
                v-for="(option, index) in food?.options"
                :key="index"
                @click="setOptionActiveButton(index)"
                :class="{ 'is-active': optionActiveButton === index }"
              >
                {{ Object.keys(option)[0] }}
              </button>
            </div>
            <div class="level my-6">
              <div class="level-left">
                <div>
                  <h3>Quantity</h3>
                  <div class="buttons has-addons">
                    <button class="button" @click="decrement">-</button>
                    <span class="button">{{ qty }}</span>
                    <button class="button" @click="increment">+</button>
                  </div>
                </div>
              </div>
              <div class="level-item">
                <div>
                  <h3>Price</h3>
                  <p class="subtitle is-5">$ {{ totalPrice?.toFixed(2) }}</p>
                </div>
              </div>
            </div>

            <button
              class="button is-primary is-fullwidth"
              @click="food && cartStore.addToCart(food, size, option, qty)"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
