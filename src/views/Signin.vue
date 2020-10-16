<template>
    <main id="main-content">
      <h1 class="title1">Nous vous attendions, connectez-vous !</h1>
      <div id="connect">
        <form class="connexion" v-on:submit.prevent="signin">
          <div class="separe">
          <label id="label" for="email">Email :</label>
          <input
            id="input email"
            class="writeInfo"
            type="email"
            name="email"
            placeholder="email@email.com"
            v-model="email"
            required
          />
          </div>
          <div class="separe">
          <label id="label" for="password">Mot de passe :</label>
          <input
            id="input password"
            class="writeInfo"
            type="password"
            name="password"
            placeholder="******"
            v-model="password"
            required
            
          />
          </div>
 <div class="separe">
          <button class="submit">Envoyer</button>
          </div>
        </form>
      </div>
            <p id="para1" class="white">
        Vous n'avez pas encore de compte, rejoignez nous ! 
        <router-link to="/signup" class="btn-link">Inscription</router-link>
      </p>
    </main>
</template>

<script>
export default {
name: "Signin",
data() {
  return {
    // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
    email: "",
    password:""
  };
},

methods: {
  signin() {
    this.$store
    .dispatch("user/signin", {
      email: this.email,
      password: this.password
    })
    .then(() => {
      this.$router.push("actus");
    })
    .catch(err => {
      console.log(err.message);
    });
  }
}
};
</script>

<style lang="css" scoped>

#connect {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

form.connexion {
  width: 250px;
  height: 240px;
      background: black;
  border: 2px solid #ec008c;
  border-radius: 10px;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

div.separe {
  margin-bottom: 20px;
}

#label {
  margin-bottom: 10px;
  margin-right: 10px;
  color: #ec008c;
  font-weight: 600;
}

input.writeInfo {
  width: 170px;
  height: 30px;
  border-radius: 5px;
  font-size: 14px;
 
  border: 2px solid black;
  padding-left: 5px;
}

button.submit {
  width: 170px;
  height: 30px;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
  background: #ebc3df;
  color: #ec008c;
  border: 1px solid #ec008c;
  font-weight: 600 !important;
  font-size: 16px;
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

/* @media screen and (min-width: 768px){ */
  #main-content {
  height: calc(100vh - 235px);
}
/* } */
</style>