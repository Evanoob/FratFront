<template>
  <main id="main-content">
    <h1 class="title1">Formulaire de signalement</h1>

    <form @submit.prevent="postSignal" class="form-signal">
      <label for="pseudo" class="label">Pseudo :</label>
      <input
        type="text"
        id="pseudo"
        class="input"
        name="pseudo"
        value="this.currentUser.pseudo"
        readonly="readonly"
        v-model="pseudo"
      />

      <label for="object" class="label">Sujet :</label>
      <select name="object" class="form-select" v-model="object">
        <option value="Maraudes">Maraudes</option>
        <option value="Urgences">Urgences</option>
        <option value="Jeunes">Jeunes</option>
        <option value="Autres">Autres</option>
      </select>

      <!-- <label for="object" class="label">Sujet :</label>
      <input id="object" type="text" class="input-signal" name="object" v-model="object" /> -->

      <label for="text" class="label">Message :</label>
      <textarea id="text" name="signal" cols="30" rows="10" class="txt-form" v-model="text"></textarea>

      <label for="text" class="label">Date :</label>
      <p class="white">{{ moment().format('DD/MM/YYYY') }}</p>

      <button class="btn-form">Envoyer</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // toto: "",
      pseudo: "",
      object: "",
      text: ""
    };
  },

  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },

  methods: {
    async getUser() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + this.currentUser._id
      );
      this.pseudo = apiRes.data.pseudo;
    },

   async postSignal() {
      const { pseudo, object, text } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/signals",
          {
            pseudo,
            object,
            text
          }
        );
        console.log(apiRes);
      } catch (apiErr) {
        console.error(apiErr);
      }
      alert("Votre signalement a bien été pris en compte, merci.")
      location.href = "../Signaler";
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

<style>
.bottom {
  margin-bottom: 60px;
}
.form-signal {
  width: 300px;
  height: 480px;
  background: black;
  border: 2px solid #ec008c;
  border-radius: 5px;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.label {
  margin-right: 10px;
  font-weight: 700;
  color: #ec008c;
}

.input {
  width: 265px;
  height: 30px;
  border-radius: 5px;
  font-size: 14px;
  color: black;
  border: 2px solid black;
  padding: 5px;
}

.txt-form {
border-radius: 5px;
font-size: 14px;
color: black;
border: 2px solid black;
padding: 5px;
}

.btn-form {
  width: 265px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
  background: #ebc3df;
  color: #ec008c;
  border: 2px solid #ec008c;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.btn-form:hover {
  color: #ad4298;
  background: white;
}

.form-select {
    width: 265px;
    height: 30px;
  border-radius: 5px;
  font-size: 14px;
  color: black; 
  border: 2px solid black;
  padding-left: 5px;
} 

 @media screen and (max-width: 480px) {
.form-signal {
  width: 250px;
  padding: 10px;
}

.input,
.form-select,
.btn-form {
  width: 230px;
}
 }

</style>