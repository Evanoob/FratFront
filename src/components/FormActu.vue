<template>
  <!-- <main id="main-content"> -->
    <!-- <h2 class="title1">Formulaire pour poster les actus</h2> -->

    <form @submit.prevent="postActu" class="form-actu">
      <label for="subject" class="label">Sujet :</label>
      <input
        id="subject"
        type="text"
        class="input"
        name="subject"
        v-model="subject"
        autocomplete="Sujet"
      />
      <label for="text" class="label">Message :</label>
      <textarea id="message" name="actu" cols="30" rows="10" class="txt-form" v-model="message"></textarea>

      <label for="text" class="label">Date :</label>
      <p class="white">{{ moment().format('DD/MM/YYYY') }}</p>

      <button class="btn-form">Envoyer</button>
    </form>
  <!-- </main> -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      subject: "",
      message: ""
    };
  },

  methods: {
    async postActu() {
      const { subject, message } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/actus",
          {
            subject,
            message
          }
        );
        console.log(apiRes);
      } catch (apiErr) {
        console.error(apiErr);
      }
      location.href = "../Actus";
    }
  }
};
</script>

<style>
.form-actu {
  width: 300px;
  height: 450px;
  background: black;
  border: 2px solid #ec008c;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 30px;
  padding: 15px;
  display: flex;
  /* flex-wrap: wrap; */
  /* align-items: center; */
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
  color: white
}
</style>