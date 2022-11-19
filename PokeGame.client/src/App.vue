<template>
  <!-- <header>
    <Navbar />
  </header> -->
  <main 
  :class="route.name == 'Guess'? 'guess':'',route.name == 'Home'? 'pokemon' : ''"
  class="pokemon">
    <router-view />
  </main>
   <!-- <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer> -->
</template>

<script>
import { computed } from 'vue'
import { useRoute } from "vue-router"
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    const route = useRoute()
    return {
      route,
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

.pokemon{
  background-image: url(https://cdn-icons-png.flaticon.com/512/1033/1033083.png);
  background-size: 70%;
  background-position: right;
  background-repeat: no-repeat;


}
.guess{
  background-image: url(https://external-preview.redd.it/e5zoQw-hgw-LCjdhC_4G8IAcHxex5pzda_BD_FPTcBY.png?auto=webp&s=c0b96b5ec20010a15864b8a0c9b202c119e52fe8);
   background-position: center;
background-size: cover;
}
footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
