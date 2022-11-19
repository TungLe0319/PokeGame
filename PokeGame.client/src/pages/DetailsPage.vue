<template>
  <div class="container-fluid">
<div class="row my-2">
  <div class="col-md-12 text-center">
  <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F07%2FPok%25C3%25A9mon_logo.png&f=1&nofb=1&ipt=37a360cd2fd689c2012e0816ecdcec5bcee002914ea5c496ae0fb8931db8a0e0&ipo=images" alt="" width="300" height="100">
  </div>
</div>


    <div class="row mt-3 justify-content-center">

  
      <div class="col-md-6 d-flex justify-content-center align-items-center ">
        <PokemonDetails :pokemon="details"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import PokeList from "../components/PokeList.vue";
import PokemonDetails from "../components/PokemonDetails.vue";
import { router } from "../router.js";
import { pokemonService } from "../services/PokemonService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
async  function getPokemonSpecies() {
  try {
      await pokemonService.getPokemonSpecies(route.params.name) 
    } catch (error) {
      Pop.error(error,'[getPokemonSpecies]')
    }
}

    onMounted(() => {
      // getAllPokemon();
      getPokemonSpecies()
    
    });
    async function getAllPokemon() {
      try {
        await pokemonService.getAllPokemon();
      } catch (error) {
        Pop.error(error, "[getAllPokemon]");
      }
    }

  watchEffect(()=>{
    if (!AppState.activePokemon) {
      router.push("/")
    }
  })
  const route = useRoute()
    return {
      route,
      pokemon: computed(() => AppState.pokemon),
      details: computed(() => AppState.activePokemon),
      
    };
  },
  components: { PokeList, PokemonDetails },
};
</script>

<style scoped lang="scss">
.scrollY {
  height: 67vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
