<template>
  <main id="main-content">
    <h1 class="title1">Mettre à jour le profil d'un utilisateur</h1>

    <div class="edit-user">
      <section class="form-section">
        <form @submit.prevent="patchUser" action="#" class="form-edit">
          <label for="input-investment" class="label">Investissement</label>
          <!-- <input id="investment" type="text" class="input" name="investment" v-model="investment" /> -->

          <select name="investment" class="form-select" v-model="investment">
            <option value="Ordinaire">Ordinaire</option>
            <option value="Empathique">Empathique</option>
            <option value="Bienfaiteur">Bienfaiteur</option>
            <option value="Protecteur">Protecteur</option>
            <option value="Ange Gardien">Ange Gardien</option>
          </select>

          <label for="input-role" class="label">Rôle</label>
          <!-- <input id="role" type="text" class="input" name="role" v-model="role" /> -->

          <select name="role" class="form-select" v-model="role">
            <option value="admin">admin</option>
            <option value="moderator">moderator</option>
            <option value="user">user</option>
          </select>

          <button class="btn-form">Envoyer</button>
        </form>
      </section>

      <section class="form-section">
        <h2 class="form-h2">Rappel des investissements et rôles.</h2>
        <ul class="block-txt">
          <li class="inv">Ordinaire</li>
          <li class="inv">Empathique (2 signalements justes)</li>
          <li class="inv">Bienfaiteur (10 signalements justes)</li>
          <li class="inv">Protecteur (25 signalements justes)</li>
          <li>Ange Gardien (50 signalements juste)</li>
          <br />
          <li class="inv">admin</li>
          <li class="inv">moderator</li>
          <li class="inv">user</li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      investment: "",
      role: ""
    };
  },

  methods: {
    async getUser() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + this.$route.params.id
      );
      (this.investment = apiRes.data.investment),
        (this.role = apiRes.data.role);
    },

    async patchUser() {
      const { investment } = this.$data;
      const { role } = this.$data;
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/" + this.$route.params.id,
          {
            investment,
            role
          }
        );
        console.log(apiRes);
      } catch (apiErr) {
        console.error(apiErr);
      }
      location.href = "/admin";
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
div.edit-user {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.form-section {
  width: 350px;
}

.form-edit {
  width: 220px;
  height: 240px;
  border: 2px solid #ec008c;
  border-radius: 5px;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
    background: black;
}

.label {
  margin-right: 10px;
  font-weight: 700;
  color: #ad4298;
}

.form-select {
    width: 170px;
  height: 30px;
  border-radius: 5px;
  font-size: 14px;
  /* color: black; */
  /* border: 1px solid black; */
  padding-left: 5px;
}

.btn-form {
  width: 170px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
  background: #ebc3df;
  color: #ec008c;
  border: 1px solid #ec008c;
  font-weight: 600 !important;
  font-size: 16px;
  cursor: pointer;
}

.btn-form:hover {
    color: #ad4298;
  background: white;
}

.form-h2 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "Lora", serif !important;
  font-weight: 700;
  color: #ad4298;
}

ul {
  list-style: none;
}

.inv {
  color: white;
}

/* @media screen and (min-width: 1023px) {
  #main-content {
    height: calc(100vh - 215px);
  }
} */

@media screen and (min-width: 880px) {
  #main-content {
    height: calc(100vh - 215px);
  }
}
</style>