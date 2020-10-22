<template>

      <main id="main-content">
             <h1 class="title1 bottom">Toutes les actus sont ici !</h1>
<ActuList />
      </main>

</template>

<script>
import ActuList from "@/components/ActuList";
export default {
components: {
    ActuList
}
}
</script>

<style>
.bottom {
    margin-bottom: 60px;
}
</style>