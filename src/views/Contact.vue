<template>
    <main id="main-content">
      <h1 class="title1 bottom">Formulaire de contact</h1>
 <section class="contact">
        <form @submit.prevent="sendMessage" class="form-contact">
         
            <label for="from" class="label">Email :</label>
            <input
              type="from"
              class="input"
              placeholder="blabla@gmail.com"
              required
              v-model="from"
            />
            <label for="pseudo" class="label">Pseudo :</label>
            <input
              id="pseudo"
              type="text"
              class="input"
              placeholder="Entrez votre pseudo"
              required
              name="pseudo"
              v-model="pseudo"
            />
            <label for="subject" class="label">Sujet :</label>
            <input 
            id="subject" 
            type="text" 
            class="input" 
            v-model="subject" 
            />
         <label for="message" class="label">Message :</label>
            <textarea
              id="message"
              class="txt-form"
              cols="80"
              rows="15"
              placeholder="Vous rencontrez un problème sur le site, contactez-nous ici. Merci !"
              v-model="message"
            ></textarea>
         <button class="btn-form">Envoyer</button>
        </form>

        <article class="expliq">
          <h2 class="title2">Fonctionnement</h2>
          <p class="blabla">Ce formulaire est là si vous rencontrez un soucis lors de votre navigation sur le site. Ainsi vous pourrez directement prévenir la personne qui s'occupe de l'administration. <br/> 
          Si vous souhaitez nous signaler quelque chose en rapport avec l'association, il faut vous inscrire et passer par le formulaire de signalement qui est mis à votre disposition.</p>
        </article>
</section>
    </main>
</template>

<script>
import { apiHandler } from "./../api/handler";
const handler = apiHandler();

export default {
  name: "Contact",
  data() {
    return {
from: "",
pseudo: "",
subject: "",
message:""
    };
  },
  methods: {
    async sendMessage() {
      await handler.post("/contact", {
        from: this.from,
        pseudo: this.pseudo,
        subject: this.subject,
        message: this.message
      });
      alert("Votre message a bien été envoyé, merci.")
      location.href = "../Contact"
    }
  }
};
</script>

<style>
.bottom {
  margin-bottom: 60px;
}

section.contact {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

.form-contact {
  width: 300px;
  height: 550px;
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
  padding: 5px
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

.expliq {
  width: 380px;

}

p.blabla {
  color: white;
    background: rgba(0, 0, 0, .6);
  padding: 15px;
}

 @media screen and (max-width: 480px) {
.form-contact {
  width: 250px;
  padding: 10px;
}

.input {
  width: 230px;
}

.btn-form {
  width: 230px;
}
 }
</style>