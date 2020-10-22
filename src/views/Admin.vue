<template>
  <!-- <div class="modo"> -->
    <main id="main-content">
      <h1 class="title1">Dashboard Admin</h1>
      <!-- <h2 class="admin">
        <router-link to="/formActu" class="actu-link">Se rendre au formulaire d'actus</router-link>
      </h2> -->

      <h2 @click="changeForm" class="admin">Formulaire pour poster les actus</h2>
      <div v-if="form"><FormActu /> </div>
      
      <h2 @click="changeUser" class="admin">Liste des utilisateurs</h2>
      <div v-if="users"><UserList /></div> 

      <h2 @click="changeSignal"  class="admin">Liste des signalements</h2>
      <div v-if="signals"><SignalList /></div> 
    </main>
  <!-- </div> -->
</template>

<script>
import FormActu from "@/components/FormActu"
import UserList from "@/components/UserList";
import SignalList from "@/components/SignalList";

export default {
  data() {
    return {
      users: false,
      signals: true,
      form: false
}
  },

  components: {
    UserList,
    SignalList,
    FormActu
  },

  methods: {
changeSignal() {
  this.signals = !this.signals
},

changeUser() {
  this.users = !this.users
},

changeForm() {
  this.form = !this.form
}
  }
};
</script>

<style>
.bottom {
  margin-bottom: 60px;
}
.admin {
  margin-bottom: 30px;
  color:#ec008c;
  font-family: "Lora", serif !important;
  font-weight: 700;
  font-size: 28px;
  cursor: pointer;
}

.admin:hover {
  color: white;
}

.actu-link {
  font-size: 24px;
  font-weight: 700;
}

/* a {
  text-decoration: none;
  color: rgb(173, 66, 152);
} */
</style>

