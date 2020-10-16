<template>
  <div id="profil-user">
      <main id="main-content">
          <h1 class="title1">Bienvenue sur votre profil (mettre le pseudo)</h1>
<ProfilData />
      </main>
  </div>
</template>

<script>
import ProfilData from "../components/ProfilData"
// import ProfilPassword from "../components/ProfilPassword"
export default {
components: {
    ProfilData
    // ProfilPassword
}
}
</script>

<style scoped>
@media screen and (min-width: 768px){
  #main-content {
  height: calc(100vh - 235px);
}
}
</style>