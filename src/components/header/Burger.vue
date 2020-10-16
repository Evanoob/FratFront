<template>
  <div id="burger" :class="{ 'active' : isBurgerActive }" @click="toggleNavMobile">
      <hr class="barBurger rotate1"  />
      <hr class="barBurger color"  />
      <hr class="barBurger rotate2" />
  </div>
</template>

<script>

export default {
  data: () => ({
            isBurgerActive: false
        }),

  methods: {
    toggleNavMobile() {
      // console.log("clicked burger", this.$ebus);
      this.$ebus.$emit("toggle-nav-mobile"), this.isBurgerActive = !this.isBurgerActive;
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
#burger {
  display: none;
}
hr {
  display: none
}
}
@media screen and (max-width: 1023px) {
    #burger {
        cursor: pointer;
          display: block;
        width: 32px;
        height: 36px;
        margin-right: 20px;
        /* position: fixed; 
        top: 20px;
        right: 5%; */
    }
.barBurger {
      width: 30px;
    height: 8px;
    background: rgb(173, 66, 152);
    margin-top: 4px;
    border-radius: 10px; 
    cursor: pointer;
    border: transparent;
}
/* #burger.active .rotate1 {
    transform: rotate(-45deg);
    background: #ec008c;
  } */

/* #burger.active .rotate2 {
    transform: rotateZ(45deg);
    background: #ec008c;
  }   */
  /* #burger.active .color {
    background: #ec008c;
  } */
}
</style>