<template>
  <div id="profil-user">
      <main id="main-content">
          <h1 class="title1">Bienvenue sur votre profil <span class="pseudo">{{ currentUser.pseudo}}</span> </h1>
<ProfilData />
      </main>
  </div>
</template>

<script>
import axios from "axios";
import ProfilData from "../components/ProfilData"
// import ProfilPassword from "../components/ProfilPassword"
export default {
components: {
    ProfilData
    // ProfilPassword
},

computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"];// récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },

methods: {
    async getUser() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + this.currentUser._id
      );
      this.pseudo = apiRes.data.pseudo
    }
},

  created() {
      try {
          this.getUser();
      } catch (err) {
          console.error(err);
      }
  }
};
</script>

<style scoped>
.pseudo {
  color: #ec008c;
  font-family: Lora !important;
}

@media screen and (min-width: 1100px){
  #main-content {
  height: calc(100vh - 235px);
}
}

@media screen and (min-width: 935px) and (max-width: 1023px){
  #main-content {
  height: calc(100vh - 235px);
}
}
</style>