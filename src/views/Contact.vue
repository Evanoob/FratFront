<template>
  <div class="contact">
    <main id="main-content">
      <h1 class="title1">Formulaire de contact</h1>
      <div class="form">
        <form action="post" id="form-contact">
          <div class="separe">
            <label for="email" id="label1">Email :</label>
            <input
              id="email"
              type="email"
              class="write"
              placeholder="blabla@gmail.com"
              required
              name="email"
            />
          </div>

          <div class="separe">
            <label for="pseudo" id="label1">Pseudo :</label>
            <input
              id="pseudo"
              type="text"
              class="write"
              placeholder="Entrez votre pseudo"
              required
              name="pseudo"
            />
          </div>
          <div class="separe">
            <textarea
              name="message"
              id="message"
              cols="80"
              rows="15"
              placeholder="Inscrivez votre message ici afin de nous contacter, merci."
            ></textarea>
          </div>
          <div class="separe">
            <input id="submit" type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
div.form {
  width: 660px;
  height: 430px;
  display: block;
  margin: auto;
}

form#form-contact {
  width: 650px;
  height: 420px;
  border: 2px solid #ec008c;
  border-radius: 10px;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  direction: column;
  justify-content: center;
}

div.separe {
  margin-bottom: 20px;
}

label#label1 {
  margin-bottom: 10px;
  margin-right: 10px;
}

input.write {
  width: 170px;
  height: 30px;
  margin-right: 20px;
  border-radius: 10px;
  font-size: 16px;
  color: #ec008c;
  border: 1px solid #ec008c;
  padding-left: 5px;
}

textarea#message {
  border: 1px solid #ec008c;
  border-radius: 10px;
  padding: 5px;
  font-size: 14px;
}

#submit {
  width: 150px;
  height: 30px;
  margin: auto;
  border-radius: 10px;
  background: rgba(173, 66, 152, 0.3);
  color: #ec008c;
  border: 1px solid #ec008c;
  font-weight: 600;
  font-size: 16px;
}

@media screen and (max-width: 1080px) {

}
</style>