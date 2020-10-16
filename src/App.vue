<template>
  <div id="app">
    <Header />
    <!-- <header id="header">
      <Logo />
      <NavMain />
      <NavMobile />
      <Burger />
    </header> -->

    <!-- <InscConnec /> -->

    <router-view />

    <!-- <div class="footer"> -->
      <Footer />
    <!-- </div> -->
  </div>
</template>

<script>
import Header from "@/components/header/Header";
// import Logo from "@/components/Logo";
// import Burger from "@/components/Burger";
// import NavMain from "@/components/NavMain";
// import NavMobile from "@/components/NavMobile";
// import InscConnec from "./components/InscConnec";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    // Logo,
    // NavMain,
    // NavMobile,
    // Burger,
    // InscConnec,
    Footer
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
/* .footer{
  position: fixed;
  bottom: 0px;
  margin-bottom: 50px;
} */

body {
  overflow-x: hidden;
  min-height: 100vh;
  max-width: 100vw;
 background-image:  url(assets/img/bg/frat_bg.jpg);
 /* , url(assets/img/bg/bg1.jpg); */
  background-repeat:no-repeat;
  /* , no-repeat; */
  background-size: cover;
background-attachment: fixed;
  /* 100% 51%, 100% 51%; */
  /* background-position: top, bottom; */
  /* background: rgba(0,0,0,.2) */
}

/* #header {
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
} */

#main-content {
  margin: 30px 150px 30px;
}

.firstSection, .secondSection {
  /* width: 100%;
  min-height: 300px; */
  display: flex;
  margin: auto;
  flex-wrap: wrap;
}

section {
  width: 100%;
  /* min-height: 300px; */
}

.title1 {
  text-align: center;
  margin-bottom:30px;
  margin-top: 50px;
  font-family: "Lora", serif !important;
  font-weight: 700;
  font-size: 36px;
  color: #ec008c;
}

.title2 {
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "Lora", serif !important;
  font-weight: 700;
  font-size: 28px;
  color: #ad4298;
}

p.para {
  text-align: justify;
  margin-bottom: 30px;
  color: white;
}

.extraBold {
  font-weight: 700;
}

.img {
  width: 100%;
  border: 2px solid #ec008c;
}

.images {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

span.contact > a {
  color: #ec008c;
  text-decoration: none;
  font-weight: 900;
}

.white {
  color: white;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {

  #main-content {
    margin: 20px 60px 50px;
  
  }

  
  }


@media screen and (max-width: 767px) {

  #main-content {
 margin: 20px 40px 50px;

  }

  .title2 {

    margin-bottom: 20px;
  }

  .img.phone {
    display: none;
  }
}

/* ****************************************END HOME**************************************** */
</style>
