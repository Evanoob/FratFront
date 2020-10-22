<template>
  <!-- <div id="usersList"> -->
      <ul class="users">
        <li class="user white" v-if="!users.length">Aucun utilisateur disponible</li>
        <li v-for="(user, i) in users" :key="i" class="user">
          <p class="pseudo">{{ user.pseudo }}</p>
          <p class="white">
            <span class="gras">Email :</span>
            {{ user.email }}
          </p>
          <p class="white">
            <span class="gras">Rôle :</span>
            {{ user.role }}
          </p>
          <p class="white">
            <span class="gras">Investissement :</span>
            {{ user.investment }}
          </p>
          <p class="white">
           <span class="gras">Code Postal :</span>
        {{ user.zipCode}}
          </p>
          <div class="dash">
            <button class="btn-dash">
              <router-link class="link-user" :to="'/editOneUser/' + user._id">Edit</router-link>
            </button>
            <button class="btn-dash is-clickable" @click="deleteUser(user._id)">Supprimer</button>
          </div>
        </li>
      </ul>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async getUsers() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users"
      );
      this.users = apiRes.data;
      console.log(apiRes.data);
    },

    async deleteUser(id) {
      const apiRes = await axios.delete(
        process.env.VUE_APP_BACKEND_URL + "/users/" + id
      );
      this.users = apiRes.data;
      this.getUsers();
    }
  },
  created() {
    try {
      this.getUsers();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
ul.users {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
}

li.user {
  display: flex;
  flex-direction: column;
  width: 225px;
  min-width: 225px;
  height: 200px;
  background: black;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid #ec008c;
  border-radius: 5px;
  position: relative;
}

.pseudo {
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;
  color: #ec008c;
}

.dash {
  margin: auto;
  position: absolute;
  width: 200px;
  min-width: 200px;
  bottom: 10px;
  display: flex;
  justify-content: space-around;
}

.link-user {
  text-decoration: none;
  color: #ec008c;
}

.supp {
  cursor: pointer;
}

.link-user:hover {
  color: #ad4298;
}

span.gras {
   font-weight: 600;
  color: #ec008c;
}

.btn-dash {
  width: 85px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #ebc3df;
  color: #ec008c;
  border: 2px solid #ec008c;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}

.btn-dash:hover {
  color: #ad4298;
  background: white;
  border: 2px solid #ad4298;
}
</style>