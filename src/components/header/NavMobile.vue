<template>
  <nav id="nav-mobile" :class="isActive && 'is-active'" >
     <ul id="ul-mobile"  @click="closeNav">
   <li class="li">
        <router-link to="/">Accueil</router-link>
      </li>
         <li class="li deroulant">
         <a href="#" class="after">Missions ▼</a>
        <ul id="sous-mobile">
          <li class="missions-mobile">
            <router-link to="/maraudes" class="mission-mobile">Maraudes</router-link>
          </li>
          <li class="missions-mobile">
            <router-link to="/urgences" class="mission-mobile">Urgences</router-link>
          </li>
          <li class="missions-mobile">
            <router-link to="/defi" class="mission-mobile">Jeunes</router-link>
          </li>
        </ul>
      </li>
      <li class="li" v-if="isConnect">
        <router-link to="/signaler">Signaler</router-link>
      </li>
      <li class="li" v-if="isConnect">
        <router-link to="/actus">Actus</router-link>
      </li>
         <li class="li"  v-if="isConnect && currentUser.role === 'user'">
        <router-link to="/profil">Profil</router-link>
      </li>
      <li class="li"  v-if="isConnect && currentUser.role === 'admin'">
        <router-link to="/admin">Admin</router-link>
      </li>
      <li class="li"  v-if="!isConnect">
      <router-link to="/signin">Connexion</router-link>
      </li>
 <li class="li"><SignoutBtn v-if="isConnect" /></li>
       
    </ul>
  </nav>
</template>

<script>
import auth from"@/auth";
import SignoutBtn from "./../SignoutBtn";
export default {
    data() {
    return {
      auth,
      isActive: false
    };
  },

    computed: {
    isConnect() {
      return Boolean(this.$store.getters["user/current"]);
    },
    currentUser() {
      const userInfos = this.$store.getters["user/current"];
      return userInfos
    }
  },

   components: {
    SignoutBtn
  },

    created() {
    // $on prend un event-custom en param 1 (string)
    // et exécute un callback (param2) quand l'event survient...
    this.$ebus.$on("toggle-nav-mobile", () => {
      // console.log(
      //   "hey : je suis nav mobile et je réagis à l'event custom <<toggle-nav-mobile>>"
      // );
      this.isActive = !this.isActive;
    })
  },

  methods: {
  closeNav() {
    this.isActive = !this.isActive
    }
  }
};
</script>

<style>
#nav-mobile {

     position: absolute;
        right: 0;
        height: 350px;
        top: 5vh;
        background: rgb(173, 66, 152);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        transform: translateX(100%);
        transition: transform .5s ease-in-out;
        
        padding-bottom: 10px;
}
#nav-moblie > #ul-mobile {display: flex;
flex-direction: column;
}
#nav-mobile > #ul-mobile > .li {
        height: 50px;
        width: 300px;
        line-height: 50px;
        padding-top: 0;
        list-style: none;
        display: flex;
        align-content: center;
        justify-content: center;
        position: relative;
}

#nav-mobile > #ul-mobile > .li > #sous-mobile {
  display: none;
}

#nav-mobile > #ul-mobile > .li:hover > #sous-mobile {
  background: rgb(173, 66, 152);
   display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position:absolute;
        margin-top:190px;
        /* margin-right:-10px; */
        z-index: 1;
    
}

#nav-mobile > #ul-mobile > .li > #sous-mobile > .missions-mobile {
    width: 100px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
}

.mission-mobile {
  color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
}

.mission-mobile:hover {
  color: #ec0086;
}

        #nav-mobile > #ul-mobile > .li > a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
    }

    #nav-mobile > #ul-mobile > .li > a:hover {
        color: #ec0086;
    }


#nav-mobile.is-active {
  transform: translateX(0);
}

@media screen and (min-width: 1024px) {
#nav-mobile {
  display: none;
}
}

@media screen and (max-width: 1023px) {
#nav-main {
  display: none;
}
}
</style>
