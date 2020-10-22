<template>
  <main id="main-content">
      <h1 class="title1">Plan du site</h1>
<section class="plan">
    <ul class="list-plan">
     
        <li class="ligne"><router-link to="/" class="lien"><span class="color">Accueil :</span> Accueil du site simplement</router-link></li>
        <li class="ligne"><router-link to="/maraudes" class="lien"><span class="color">Maraudes :</span> Informations générales sur les maraudes</router-link></li>
        <li class="ligne"><router-link to="/urgences" class="lien"><span class="color">Urgences :</span> La présentation des colis d'urgence</router-link></li>
        <li class="ligne"><router-link to="/defi" class="lien"><span class="color">Jeunes :</span> Le sujet de la jeunesse</router-link></li>
        <li class="ligne"><router-link to="/signin" class="lien"><span class="color">Connexion :</span> La connexion des utilisateurs</router-link></li>
        <li class="ligne"><router-link to="/signup" class="lien"><span class="color">Inscription :</span> L'inscription afin d'avoir accès à plus d'onglets</router-link></li>
        <li class="ligne"><router-link to="/cgu" class="lien"><span class="color">C.G.U :</span> Les conditions générales d'utilisation du site</router-link></li>
        <li class="ligne"><router-link to="/plan" class="lien"><span class="color">Plan :</span> Le plan du site, c'est ici que vous vous trouvez actuellement</router-link></li>
        <li class="ligne"><router-link to="/contact" class="lien"><span class="color">Contact :</span> Formulaire de contact en cas de problème rencontré sur le site seulement</router-link></li>

        <li class="ligne" v-if="isConnect && currentUser.role === 'user'"><router-link to="/signaler" class="lien"><span class="color">Signaler :</span> Formulaire pour envoyer un signalement ou une information en lien avec l'association</router-link></li>
        <li class="ligne" v-if="isConnect"><router-link to="/actus" class="lien"><span class="color">Actus :</span> Les actus concernant l'association et ce qui gravite autour d'elle</router-link></li>
        <li class="ligne" v-if="isConnect"><router-link to="/profil" class="lien"><span class="color">Profil :</span> Profil des utilisateurs, vos données modifiables, votre mot de passe et la suppression de votre compte</router-link></li>

        <li class="ligne" v-if="isConnect && currentUser.role === 'admin'"><router-link to="/admin" class="lien"><span class="color">Admin :</span> Formulaire pour que l'admin poste directement les actus sur le site, la liste des utilisateurs en cas de besoin pour les éditer ou les supprimer et la liste des signalements reçus de la part des utilisateurs du site</router-link></li>
    </ul>
</section>
  </main>
</template>

<script>
import auth from "@/auth";
export default {
data() {
    return {
        auth
    };
},

computed: {
    isConnect() {
        return Boolean(this.$store.getters["user/current"]);
    },

    currentUser() {
        const userInfos = this.$store.getters["user/current"];
        return userInfos;
    }
}
}
</script>

<style>

section.plan {
    margin-top: 60px;
    padding: 15px;
    background: rgba(0, 0, 0, .6);
}

li.ligne {
    margin-bottom: 10px;
}

a.lien {
    text-decoration: none;
    color: white;
}

span.color {
    color: #ec008c;
    font-weight: bold;
    font-size: 18px;
}

@media screen and (min-width: 1023px){
#main-content {
    min-height: calc(100vh - 235px);
}
}

@media screen and (max-width: 1022px) and (min-width: 767px) {
    #main-content {
        min-height: calc(100vh - 255px);
    }
}
</style>