<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
// import TheWelcome from '../components/TheWelcomeSofia.vue'
</script>

<template>
  <main>
    <div class="nav">
    <div>
      <h1>Sofia Masrour CV</h1>
    </div>
    <div>
      <h1><router-link to="/about">About</router-link></h1>
    </div>
  </div>
    <!-- <TheWelcome /> -->
    <div class="photos-wrapper">
      <img src="../../public/photos_home/Flygfyrens_Handelspark.png" alt="" />
      <img src="../../public/photos_home/Habiteum.png" alt="" />
      <img src="../../public/photos_home/Lokalanpassningsprojekt.png" alt="" />
      <img src="../../public/photos_home/The_Little_Helpers.png" alt="" />
      <img src="../../public/photos_home/The_Wandering_Synagouge.png" alt="" />
      <img src="../../public/photos_home/Bernard_Rudofsky.png" alt="" />
      <img src="../../public/photos_home/Stallet_Sofiero.png" alt="" />
      <img src="../../public/photos_home/Energihamnen.png" alt="" />
      <img src="../../public/photos_home/Ostra_Sala_backe_etapp_3a.png" alt="" />
    </div>
  </main>
</template>


<style scoped>
h1{
  font-size: 2em;
  color: var(--font-color-primary);
  text-align: center;
  margin-top: 20px;
}
img {
  width: 40rem;
  height: auto;
  margin-bottom: 20px;
} 

.nav {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  background-color: var(--color-background);
  color: var(--font-color-primary);
}

.photos-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--color-background);
  color: var(--font-color-primary);
}

</style>

