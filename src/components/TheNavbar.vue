<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'


const router = useRouter();
const route = useRoute();

type Route = {
  path: string
  name: string
}

const routes: Route[] = [
  { path: '/', name: 'Home' },
  { path: '/menu', name: 'Menu' }
]

const navigateToCheckoutOrBack = () => {
  if (route.path === '/checkout') {
    router.go(-1); // Go back to the previous page
  } else {
    router.push('/checkout'); // Navigate to the checkout page
  }
};

</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item is-size-4">
        <span class="icon-text">
          <span class="icon"> <i class="fas fa-utensils"></i> </span>
          <span><strong>CireBowl</strong></span>
        </span>
      </RouterLink>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <RouterLink v-for="route in routes" :key="route.path" :to="route.path" class="navbar-item">
          {{ route.name }}
        </RouterLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button @click="navigateToCheckoutOrBack" class="button is-primary">
              <span class="icon" style="color: white">
                <i class="fas fa-shopping-cart"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
