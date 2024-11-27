<script setup lang="ts"></script>

<template>
  <main>
    <div class="photos-container">
      <div class="photos-wrapper">
        <router-link to="/flygfyrens_handelspark">
          <img src="../../public/photos_home/Flygfyrens_Handelspark.png" alt="" />
          <p class="subtitle">+ Arkitektur / Ombyggnation</p>
        </router-link>
        <router-link to="/Habiteum">
          <img src="../../public/photos_home/Habiteum.png" alt="" />
          <p class="subtitle">+ Arkitektur / Ombyggnation</p>
        </router-link>
        <router-link to="/LokalanpassningsProjekt"
          ><img src="../../public/photos_home/Lokalanpassningsprojekt.png" alt="" />
          <p class="subtitle">+ Produktdesign / Lösa möbler</p>
        </router-link>
        <router-link to="/the_little_helpers"
          ><img src="../../public/photos_home/The_Little_Helpers.png" alt="" />
          <p class="subtitle">+ Produktdesign / Kakel</p>
        </router-link>
        <router-link to="/the_wandering_synagogue"
          ><img src="../../public/photos_home/The_Wandering_Synagouge.png" alt="" />
          <p class="subtitle">+ Arkitektur / Paviljong</p>
        </router-link>
        <router-link to="/bernard_rudofsky"
          ><img src="../../public/photos_home/Bernard_Rudofsky.png" alt="" />
          <p class="subtitle">+ Arkitektur / Paviljong</p>
        </router-link>
        <router-link to="/stallet_sofiero"
          ><img src="../../public/photos_home/Stallet_Sofiero.png" alt="" />
          <p class="subtitle">+ Arkitektur / Inmätningar</p>
        </router-link>
        <router-link to="/energihamnen"
          ><img src="../../public/photos_home/Energihamnen.png" alt="" />
          <p class="subtitle">+ Stadsbyggnad / Industri</p>
        </router-link>
        <router-link to="/ostra_sala_backe_etapp_3a"
          ><img src="../../public/photos_home/Ostra_Sala_backe_etapp_3a.png" alt="" />
          <p class="subtitle">+ Stadsbyggnad / Blandstad</p>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
img {
  margin-bottom: 20px;
}

.photos-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.photos-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  gap: 3rem;
  padding: 20px;
}

img {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
}

.subtitle {
  font-size: var(--font-size-md);
  font-weight: 700;
}

a {
  text-decoration: none;
}

@media (min-width: 1200px) {
  .photos-container {
    display: flex;
    padding: 20px;
    justify-content: center;
  }

  .photos-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    max-width: 100%;
    width: 100%;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 35rem;
    max-width: 100%;
    margin: auto;
  }

  img {
    justify-self: center;
    width: 100%;
    max-width: 800px;
    height: auto;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: var(--font-size-md);
    font-weight: 700;
    text-align: center;
  }
}
</style>
