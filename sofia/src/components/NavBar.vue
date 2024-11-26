<style src="../assets/base.css"></style>
<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '../stores/appStore';
// import darkModeIcon from '../assets/icons/darkMode.svg';
import darkModeIcon from '../assets/darkMode.svg';
import lightModeIcon from '../assets/lightMode.svg';

const appStore = useAppStore()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <main>
    <div class="nav">
      <div>
        <h1 class="name">Sofia Masrour</h1>
      </div>
      
      <!-- <div class="theme-toggle" @click="appStore.toggleDarkMode">
        <svg v-if="appStore.darkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M9.37 2.7a1 1 0 0 1 1.3-.6A9 9 0 1 0 21.9 13.33a1 1 0 0 1-.93-1.37 7 7 0 1 1-10.6-8.29 1 1 0 0 1-1-.97Z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6.93-15.07a1 1 0 0 1 1.41-1.41 1 1 0 0 1-1.41 1.41Zm0 12.14a1 1 0 0 1 1.41 1.41 1 1 0 0 1-1.41-1.41ZM4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm18 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM4.22 6.22a1 1 0 0 1 1.41-1.41 1 1 0 0 1-1.41 1.41Zm12.14 12.14a1 1 0 0 1 1.41 1.41 1 1 0 0 1-1.41-1.41ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
        </svg>
      </div> -->

      <div class="theme-toggle" @click="appStore.toggleDarkMode">
        <img v-if="appStore.darkMode" :src="darkModeIcon" alt="Dark Mode Icon" />
        <img v-else :src="lightModeIcon" alt="Light Mode Icon" />
      </div>


      <!-- <button @click="appStore.toggleDarkMode">
      Toggle Dark Mode
    </button> -->

      <div class="hamburger" @click="toggleMenu">
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
      </div>

      <div :class="['links', { open: isMenuOpen }]">
        <h1><router-link to="/" class="link">Home</router-link></h1>
        <h1><router-link to="/about" class="link">About</router-link></h1>
      </div>
    </div>
  </main>
</template>

<style scoped>
.name {
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
  display: none;
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
  display: flex;
  gap: 1rem;
}

.links.open {
  display: block;
}

.theme-toggle {
  cursor: pointer;
} 

.theme-toggle img{
  width: 1.8rem;
  height: auto;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .links {
    display: none;
    flex-direction: column;
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
  }
}
</style>
