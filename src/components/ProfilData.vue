<template>
  <section id="edit">
    <section class="data">
      <h2 class="title2">Mettez à jour vos données :</h2>

      <form class="form-data" @submit.prevent="patchUser">
        <label for="email" class="label">Email :</label>
        <input 
        id="email" 
        type="email" 
        class="input" 
        name="email" 
        v-model="email" 
        />

        <label for="zipCode" class="label">Code Postal :</label>
        <input
          id="zipCode"
          type="text"
          class="input"
          placeholder="93600"
          name="zipCode"
          v-model="zipCode"
        />

        <button class="btn-form">Envoyer</button>
      </form>
    </section>

    <section class="pass-supp">
      <article class="profil-newpass">
        <h2 class="title2">Modifiez votre mot de passe :</h2>
        
        <form class="form-data" @submit.prevent="patchPassword">
          <label for="input-newpass" class="label newpass">Veuillez entrer votre noveau mot de passe</label>
          <input
            id="input-newpass"
            type="password"
            class="input"
            name="password"
            placeholder="******"
            v-model="password"
          />
          <button class="btn-form">Envoyer</button>
        </form>
      </article>

      <p class="supp" @click="deleteUser">Cliquez ici afin de supprimer votre profil</p>
    </section>
  </section>
</template>

<script>
import axios from "axios";
import auth from "@/auth/";
export default {
  data() {
    return { 
      email: "",
      zipCode: "",
      password: ""
    };
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
      this.email = apiRes.data.email
      this.zipCode = apiRes.data.zipCode
    },

    async patchUser() {
        const { email, zipCode } = this.$data;
        try {
            const apiRes = await axios.patch(
                process.env.VUE_APP_BACKEND_URL + "/users/" + this.currentUser._id,
                {
                   email,
                   zipCode
                }
            );
            console.log(apiRes);
        } catch (apiErr) {
            console.error(apiErr);
            // console.log(apiErr)
        }
        alert("Vos informations sont bien modifiées !");
    },

    async patchPassword() {
      const { password } = this.$data;
      try {
        const apiRes = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/password/" + this.currentUser._id,
          {
            password
          }
        );
            alert("Votre mot de passe est bien modifié !")
        console.log(apiRes);
      } catch (apiErr) {
        console.error(apiErr);
      }
    
    },

    async deleteUser() {
        if (confirm("Etes-vous sûr de vouloir supprimer votre compte ?!")) {
            await axios.delete(
                process.env.VUE_APP_BACKEND_URL + "/users/" + this.currentUser._id
            );
            this.signout()
        }
    },

    signout() {
        auth.signout(this);
        // this.$router.push("/");
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
#edit {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.data, .pass-supp {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 365px;
}

.profil-newpass {
  margin-bottom: 40px;
}

.form-data {
  width: 300px;
  height: 180px;
  background: black;
  border: 2px solid #ec008c;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}

.label {
  margin-right: 10px;
  font-weight: 700;
  color: #ad4298;
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

.btn-form {
  width: 265px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
  background: #ebc3df;
  color: #ec008c;
  border: 1px solid #ec008c;
    font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.btn-form:hover {
  color: #ad4298;
  background: white;
}

.supp {
  cursor: pointer;
  font-weight: 700;
  color:white;
  
}

.supp:hover {
  color: #ec008c;
}


</style>