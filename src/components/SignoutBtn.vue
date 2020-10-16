<template>
  <div @click="signout" class="li-mobile is-clickable">Deconnexion</div>
</template>

<script>
import auth from "@/auth/";

export default {
name: "Signout",
methods: {
    signout() {
        auth.signout(this); // on passe l'instance de vue à la fonction deconnexion
    }
}
};
</script>

<style>
 .li-mobile {
     /* margin-left: 25px; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* height: 100px;
  line-height: 100px;
  width: 90px; */
    font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #ec008c;
  cursor: pointer;
   }

   .li-mobile:hover {
       color: white;
   }

   @media screen and (max-width: 1023px) {
.li-mobile {
  color: white;
}

.li-mobile:hover {
  color: #ec008c;
}
}
</style>
