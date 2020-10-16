<template>

    <main id="main-content">
      <h1 class="title1">Inscrivez-vous sans hésiter !</h1>

      <div id="block-signup">
        <form @submit.prevent="signup" class="form-signup">
          <div class="separate">
            <label for="email" id="label1">Email :</label>
            <input
              id="email"
              type="email"
              class="write"
              placeholder="email@email.com"
              v-model="user.email"
            />
          </div>

          <div class="separate">
            <label for="pseudo" id="label1">Pseudo :</label>
            <input
              id="pseudo"
              type="text"
              class="write"
              placeholder="Pseudo"
              v-model="user.pseudo"
            />
          </div>

          <div class="separate">
            <label for="zipCode" id="label1">Code Postal :</label>
            <input
              id="zipCode"
              type="text"
              class="write"
              placeholder="Code Postal"
              v-model="user.zipCode"
            />
          </div>

          <div class="separate">
            <label for="password" id="label1">Mot de passe :</label>
            <input
              id="password"
              type="password"
              class="write"
              placeholder="******"
              v-model="user.password"
            />
          </div>
          <!-- <Avatar v-if="user.avatar" :avatar="user.avatar" /> -->
          <button class="btn-insc">Envoyer</button>
        </form>
        <p class="para-insc"></p>
      </div>

      <p id="para1" class="white">
        Vous avez déjà un compte
        <router-link to="/signin" class="btn-link">Connexion</router-link>
      </p>
    </main>
</template>

<script>
// import Avatar from "@/components/Avatar";

export default {
  data() {
    return {
      user: {
      email: "",
      pseudo: "",
      zipCode: "",
      password: "",
      // avatar: ""
      }
    };
    },


    // components: {
    // Avatar
    // },

    methods: {
      // updateAvatar(image) {
      //   console.log(image);
      // },
    signup() {
      const fd = new FormData(); // form data nécessaire pour envoyer des fichiers images (files)
      fd.append("email", this.user.email);
      fd.append("pseudo", this.user.pseudo);
      fd.append("zipCode", this.user.zipCode);
      fd.append("password", this.user.password);
      // if (this.user.avatar) fd.append("avatar", this.user.avatar);
      this.$store.dispatch("user/signup", fd);
      this.$router.push("/Signin")
    }    
  } 
};
</script>

<style scoped>
#block-signup {
  margin-top: 50px;
}

.form-signup {
  width: 220px;
  height: 360px;
      background: black;
  border: 2px solid #ec008c;
  border-radius: 5px;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

div.separate {
  margin-bottom: 20px;
}

#label1 {
  margin-bottom: 10px;
  margin-right: 10px;
  color: #ec008c;
  font-weight: 600;
}

input.write {
  width: 180px;
  height: 30px;
  border-radius: 5px;
  font-size: 14px;
  color: #ec008c;
  border: 2px solid black;
  padding-left: 5px;
}

.btn-insc {
  width: 180px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  border-radius: 5px;
  background: #ebc3df;
  color: #ec008c;
  border: 2px solid black;
  font-weight: bold;
  font-size: 16px;
}

.btn-insc:hover {
  color: white;
}

p#para1 {
  margin-top: 5px;
  text-align: center;
  font-size: 12px;
}

.btn-link {
  color: #ad4298;
  text-decoration: none;
}

.btn-link:hover {
  color: white
}

@media screen and (min-width: 768px){
  #main-content {
   height: calc(100vh - 235px);
}
}
</style>
