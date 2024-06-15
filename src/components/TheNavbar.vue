<script setup lang="ts">
import { RouterLink } from 'vue-router'

type Route = {
  path: string
  name: string
}

const routes: Route[] = [
  { path: '/', name: 'Home' },
  { path: '/menu', name: 'Menu' }
]
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
            <RouterLink to="/checkout" class="button is-primary">
              <span class="icon" style="color: white">
                <i class="fas fa-shopping-cart"></i>
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
