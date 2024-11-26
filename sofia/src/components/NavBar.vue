<!-- <style src="../assets/base.css"></style>
<script setup lang="ts"></script>

<template>
  <main>
    
    <div class="nav">
      <div>
        <h1 class="name">Sofia Masrour CV</h1>
      </div>
      <div>
        <h1><router-link to="/" class="link">Home</router-link></h1>
        <h1><router-link to="/about" class="link">About</router-link></h1>
        <h1>
          <router-link to="/flygfyrens_handelspark" class="link"
            >Flygfyrens Handelspark
          </router-link>
        </h1>
      </div>
    </div>
  </main>
</template>

<style sccoped>
.name {
  color: var(--font-color-primary);
}
.link {
  color: var(--font-color-primary);
  text-decoration: none;
}

.nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
  background: var(--bg-secondary);
}


</style> -->

 <style src="../assets/base.css"></style>
<script setup lang="ts">
import { ref } from 'vue';

// State to toggle the visibility of the menu
const isMenuOpen = ref(false);

// Toggle function for the hamburger menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <main>
    <div class="nav">
      <div>
        <h1 class="name">Sofia Masrour</h1>
      </div>
      
      <!-- Hamburger Menu -->
      <div class="hamburger" @click="toggleMenu">
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
        <span :class="{ active: isMenuOpen }"></span>
      </div>

      <!-- Navigation Links -->
      <div :class="['links', { open: isMenuOpen }]">
        <h1><router-link to="/" class="link">Home</router-link></h1>
        <h1><router-link to="/about" class="link">About</router-link></h1>
        <h1>
          <router-link to="/flygfyrens_handelspark" class="link">
            Flygfyrens Handelspark
          </router-link>
        </h1>
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
