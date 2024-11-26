<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
import { RouterView } from 'vue-router';
import { useAppStore } from './stores/appStore';
import BernardRudofsky from './views/BernardRudofsky.vue';

const appStore = useAppStore()

const message = ref('Welcome to the app!')

onMounted(() => {
  console.log('App has been mounted')
})

const incrementCount = () => {
  appStore.increment()
}

onMounted(() => {
  console.log('App mounted!')
})

onUpdated(() => {
  console.log('App updated!')
})

onUnmounted(() => {
  console.log('App unmounted!')
})
</script>

<template>
  <div :class="{ dark: appStore.darkMode }">
    <NavBar />
    <h1>{{ message }}</h1>
    <button @click="incrementCount">Increment</button>
    <p>Count from Pinia store: {{ appStore.doubleCount }}</p>
    <BernardRudofsky message="Hello from the parent!" />
    <button @click="appStore.toggleDarkMode">
      Toggle Dark Mode
    </button>
  </div>
  <RouterView />
</template>

<style scoped>

/* Default light mode styles */
body {
  background-color: white;
  color: black;
}

.dark {
  background-color: #121212;
  color: white;
}

button {
  padding: 10px;
  margin: 10px;
}


/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
