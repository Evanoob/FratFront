<template>
  <nav id="nav-main">
    <ul id="ul">
      <li class="li">
        <router-link to="/" class="link-nav">Accueil</router-link>
      </li>
      <li class="li deroulant">
         <a href="#" class="after">Missions ▼</a>
        <ul id="sous">
          <li class="missions">
            <router-link to="/maraudes" class="mission">Maraudes</router-link>
          </li>
          <li class="missions">
            <router-link to="/urgences" class="mission">Urgences</router-link>
          </li>
          <li class="missions">
            <router-link to="/defi" class="mission">Jeunes</router-link>
          </li>
        </ul>
      </li>
      <li class="li" v-if="isConnect">
        <router-link to="/signaler" class="link-nav">Signaler</router-link>
      </li>
      <li class="li" v-if="isConnect">
        <router-link to="/actus" class="link-nav">Actus</router-link>
      </li>
      <li class="li" v-if="isConnect && currentUser.role === 'user'">
        <router-link to="/profil" class="link-nav">Profil</router-link>
      </li>
      <li class="li" v-if="isConnect && currentUser.role === 'admin'">
        <router-link to="/admin" class="link-nav">Admin</router-link>
      </li>
      <li class="li" v-if="!isConnect">
        <router-link to="/signin" class="link-nav">Connexion</router-link>
      </li>

      <SignoutBtn v-if="isConnect" />
    </ul>
  </nav>
</template>

<script>
import auth from "@/auth";
import SignoutBtn from "./../SignoutBtn";
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
  },

  components: {
    SignoutBtn
  }
};
</script>

<style lang="css">
#nav-main {
  width: 700px;
  height: 100px;
 background: #ebc3df;
   /* display: flex;
   justify-content: space-between; */
  border: 1px solid #ec008c;
  /* margin-top: -5px; */
  padding-right: 10px;
  padding-left: 10px;
}
#ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      line-height: 100px;
      width: 90px;
      position: relative;
}

nav > ul > li:hover > ul#sous {
 background: #ebc3df;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position:absolute;
        margin-top:249px;
        /* // margin-left:-10px;
        // z-index: 5; */
        border-left: 1px solid #ec008c;
        border-right: 1px solid #ec008c;
        border-bottom: 1px solid #ec008c;
}

#sous {
       display: none;
}

.missions {
      width: 120px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
 }

a.after {
  color: #ec008c;
  font-weight: 600;
  width: 90px;
  text-decoration: none;
}

.mission {
  color: #ec008c;
  font-weight: 600;
  text-decoration: none;
}

      a.link-nav {
        font-size: 16px;
        font-weight: 600;
        height: 100px;
        width: 90px;
        text-decoration: none;
        color: #ec008c;
      }

      a:hover {
        color: white;
      }


</style>
