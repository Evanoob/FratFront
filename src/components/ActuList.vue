<template>

    <ul class="actus">
      <li class="actu" v-if="!actus.length">Aucune actu n'est disponible pour le moment.</li>
      <li v-for="(actu, i) in actus.slice().reverse()" :key="i" class="actu">
        <p class="date white">Le {{ moment(actu.date).format('DD/MM/YYYY') }}</p>
        <h2 class="sujet">{{ actu.subject }}</h2>
        <p class="message white">{{ actu.message }}</p>
        
        <p v-if="isAdmin">
          <button class="btn-actu" @click="deleteActu(actu._id)">Supprimer</button>
        </p>
      </li>
    </ul>
 
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      actus: []
    };
  },

  computed: {
    isAdmin() {
      return this.$store.getters["user/current"].role === "admin";
    }
  },

  methods: {
    async getActus() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/actus"
      );
      this.actus = apiRes.data;
      console.log(apiRes.data);
    },

    async deleteActu(id) {
      if (confirm("Etes-vous sûr de vouloir supprimer cette actu ?")) {
         const apiRes = await axios.delete(
        process.env.VUE_APP_BACKEND_URL + "/actus/" + id
      );
      this.actus = apiRes.data;
      this.getActus();
      }
    }
  },
    created() {
    try {
      this.getActus();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
.actus {
  width: 95%;
  min-width: 250px;
  border: 2px solid #ec008c;
  border-radius: 5px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.actu {
  width: 95%;
  min-width: 200px;
  background: black;
  /* min-height: 160px; */
  border: 2px solid #ec008c;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
}

.actu:nth-last-of-type(-n+1) {
  margin-bottom: 0px;
}

.date {
  float: right;
  color: #ad4298;
  font-weight: 700;
}

.sujet {
  color: #ad4298;
  /* margin-bottom: 10px; */
}

.message {
  width: 80%;
  margin-bottom: 10px;
}

.btn-actu {
    width: 85px;
  height: 25px;
  margin-top: 10px;
  border-radius: 5px;
  background: #ebc3df;
  color: #ec008c;
  border: 2px solid #ec008c;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  float: right;
}

@media screen and (max-width: 600px) {
 .actu {
   display: flex;
   flex-direction: column;
   justify-content: center;
 }
}
</style>