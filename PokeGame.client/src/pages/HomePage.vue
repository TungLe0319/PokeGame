<template>
  <div class="container-fluid">
    <div class="row my-2 justify-content-center">
      <div class="col-md-12 text-center">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F07%2FPok%25C3%25A9mon_logo.png&f=1&nofb=1&ipt=37a360cd2fd689c2012e0816ecdcec5bcee002914ea5c496ae0fb8931db8a0e0&ipo=images"
          alt=""
          width="300"
          height="100"
        />
      </div>
    </div>

    <!-- <SearchBar/> -->
    <div class="row justify-content-center my-2">
      <div class="col-md-6 d-fex align-items-center justify-content-center">
        <div
          class="input-group mb-1 rounded-5 elevation-5 searchContainer position-relative"
        >
          <button class="btn d-flex justify-content-center" type="submit">
            <i class="mdi mdi-magnify fs-2"></i>
          </button>
          <input
            v-model="editable.term"
            type="text"
            class="form-control rounded-5"
            aria-label="Username"
            placeholder="What pokemon do you want to search for?"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>

    <div class="row mt-3 mx-2 justify-content-center">
      <div class="row px-3 scrollY">
        
        <div class="col-md-3" v-for="p in pokemon" :key="p.id">
          <PokeList2 :pokemon="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import PokeList from "../components/PokeList.vue";
import PokemonDetails from "../components/PokemonDetails.vue";
import { pokemonService } from "../services/PokemonService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({});
    onMounted(() => {
      getAllPokemon();
    });
    watchEffect(() => {});
    async function getAllPokemon() {
      try {
        await pokemonService.getAllPokemon();
      } catch (error) {
        Pop.error(error, "[getAllPokemon]");
      }
    }

    return {
      editable,
      details: computed(() => AppState.activePokemon),
      pokemon: computed(() =>
    {
      if (editable.value.term) {
        return    AppState.pokemon.filter((p) =>
          p.name.toLowerCase().includes(editable.value.term)
        )
      }
      else  return AppState.pokemon
    }
      ),
    };
  },
  components: { PokeList, PokemonDetails },
};
</script>

<style scoped lang="scss">
.scrollY {
  height: 84vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
