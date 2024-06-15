<script setup lang="ts"></script>

<template>
  <main class="container">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered reverse-columns">
            <div class="column is-10-mobile is-10-tablet is-8-desktop is-5-widescreen is-5-fullhd">
              <p class="title is-2 mb-3">Ultimate Ricebowl Of Your Choices</p>
              <p class="subtitle is-5 mb-6">
                Eat what you want, Eat what you need, Eat what you pay
              </p>
              <router-link to="/menu" class="button is-primary is-medium has-text-primary-100"
                ><span>Check</span>
                <span class="icon is-small"> <i class="fas fa-arrow-right"></i> </span
              ></router-link>
            </div>
            <div
              data-aos="fade-right"
              class="column is-10-mobile is-10-tablet is-4-desktop is-7-widescreen is-5-fullhd is-offset-1-fullhd"
            >
              <figure class="image is-5by4">
                <img src="/images/food.jpg" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-body {
  --bulma-hero-body-padding-medium: 5rem 4rem;
}
</style>
