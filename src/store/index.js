import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import createPersistedState from "vuex-persistedstate"; // plugin pour vuex qui permet de gérer et stocker l'état entre les actualisations de la page, permet une déconnexion auto lorsqu'on quitte la page


// READ THE DOC !!!
// https://vuex.vuejs.org/fr/api/
// https://vuex.vuejs.org/fr/api/#modules

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // product,
    user
  },
  plugins: [createPersistedState()]
});