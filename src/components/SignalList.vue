<template>
      <ul class="signals">
          <li class="signal" v-if="!signals.length">Aucun signalement n'est disponible</li>
          <li v-for="(signal, i) in signals.slice().reverse()" :key="i" class="signal">
             <p class="date"> {{ moment(signal.date).format('DD/MM/YYYY') }} </p>
              <h3 class="sujet"> Pseudo: {{ signal.pseudo }} - Objet: {{ signal.object }} </h3>
              <p class="message white">Message: {{ signal.text }} </p>
             
             <p><button class="btn-signal" @click="deleteSignal(signal._id)">Supprimer</button></p>
          </li>
      </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      signals: []
    };
  },
  methods: {
    async getSignals() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/signals"
      );
      this.signals = apiRes.data;
      console.log(apiRes.data);
    },

    async deleteSignal(id) {
      const apiRes = await axios.delete(
        process.env.VUE_APP_BACKEND_URL + "/signals/" + id
      );
      this.signals = apiRes.data;
      this.getSignals();
    },
  },
  created() {
    try {
      this.getSignals();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
.signals {
   width: 95%;
  min-width: 250px;
  border: 2px solid #ec008c;
  border-radius: 5px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
    background: rgba(0, 0, 0, .6);
}

.signal {
  width: 95%;
  min-width: 200px;
  background: black;
  /* min-height: 160px; */
  border: 2px solid #ec008c;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
}

/* .message {
  color: white;
} */

.signal:nth-last-of-type(-n+1) {
  margin-bottom: 0px;
}

.date {
  float: right;
  color:#ec008c;
  font-weight: 700;
}

.sujet {
  color: #ec008c;
  /* margin-bottom: 10px; */
}

.message {
  width: 80%;
  margin-bottom: 10px;
}

.btn-signal {
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

.btn-signal:hover {
  color: #ad4298;
  background: white;
  border: 2px solid #ad4298;
}

@media screen and (max-width: 600px) {
 .signal {
   display: flex;
   flex-direction: column;
   justify-content: center;
 }
}

</style>