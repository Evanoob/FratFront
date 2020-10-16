<template>
   <header id="header">
      <Logo />
      <NavMain />
      <NavMobile />
      <Burger />
    </header>
</template>

<script>
import Logo from "@/components/header/Logo";
import Burger from "@/components/header/Burger";
import NavMain from "@/components/header/NavMain";
import NavMobile from "@/components/header/NavMobile";

export default {
 components: {
    Logo,
    NavMain,
    NavMobile,
    Burger
}
}
</script>

<style>
#header {
  width: 100%;
  min-width: 320px;
  height: 100px;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
}
</style>