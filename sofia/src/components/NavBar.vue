<style src="../assets/base.css"></style>
<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '../stores/appStore'
import darkModeIcon from '../assets/darkMode.svg'
import lightModeIcon from '../assets/lightMode.svg'

const appStore = useAppStore()
const route = useRoute()

const message = computed(() => {
  return ` /${String(route.name)} `
})

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isMobileView = ref(window.innerWidth < 768)
const updateView = () => {
  isMobileView.value = window.innerWidth < 768
}

onMounted(() => {
  window.addEventListener('resize', updateView)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateView)
})
</script>

<template>
  <main>
    <div class="nav">
      <div class="nameDiv">
        <h1 class="name">Sofia Masrour</h1>
        <h3>{{ message }}</h3>
      </div>

      <div class="hamburger" v-if="isMobileView" @click="toggleMenu">
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
      </div>

      <div :class="['links', { open: isMenuOpen }]">
        <div class="theme-toggle" @click="appStore.toggleDarkMode()">
          <img v-if="appStore.darkMode" :src="darkModeIcon" alt="Dark Mode Icon" />
          <img v-else :src="lightModeIcon" alt="Light Mode Icon" />
        </div>

        <h3>
          <router-link to="/" class="link" @click="isMobileView && toggleMenu()">
            Home
          </router-link>
        </h3>

        <h3>
          <router-link to="/about" class="link" @click="isMobileView && toggleMenu()">
            About Me
          </router-link>
        </h3>
        <h3>
          <router-link to="/contact" class="link" @click="isMobileView && toggleMenu()">
            Contact
          </router-link>
        </h3>
      </div>
    </div>
  </main>
</template>

<style scoped>
.name,
h3 {
  color: var(--font-color-primary);
}

.link {
  color: var(--font-color-primary);
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: var(--bg-secondary);
}
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 20px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--font-color-primary);
  transition: all 0.3s ease;
}

.hamburger span.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.active:nth-child(2) {
  opacity: 0;
}

.hamburger span.active:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.links {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background: var(--bg-secondary);
  position: absolute;
  top: 3rem;
  left: 0;
  padding: 1rem;
}

.links.open {
  display: flex;
  margin-top: 2rem;
}

.theme-toggle {
  cursor: pointer;
}

.theme-toggle img {
  width: 1.8rem;
  height: auto;
}

@media (min-width: 768px) {
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background: var(--bg-secondary);
  }
  .nameDiv {
    min-width: 15rem;
  }

  .hamburger {
    display: none;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    background: transparent;
    position: static;
    margin-top: 0;
    padding: 0;
  }

  .theme-toggle img {
    width: 1.5rem;
    height: auto;
  }
}
</style>
