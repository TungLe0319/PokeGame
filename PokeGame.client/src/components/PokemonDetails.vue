<template>

  <div class="card mt-2 rounded-4 position-relative w-100 p-3" v-if="pokemon">
    <div class="pokemonImg ">
      <img :src="pokemon?.img" alt="" height="250" width="250"  class="animate__animated animate__fadeIn"/>
    </div>

 
<div class="d-flex">
  <button
      class="btn border-0 border-bottom "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseStats"
      aria-expanded="false"
      aria-controls="collapseStats"
    >
      stats
    </button>
      <button
      class="btn border-0 border-bottom "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseMoves"
      aria-expanded="false"
      aria-controls="collapseStats"
    >
      Moves/Abilities
    </button>
      <button
      class="btn border-0 border-bottom "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseEvolutions"
      aria-expanded="false"
      aria-controls="collapseStats"
    >
      Evolutions
    </button>
</div>



    <div class="collapse show" id="collapseStats">
      <div class="card-body">
        <ul class="list-group border-0">
          <li v-for="i in pokemon?.stats" class="list-group-item">
            <b class="text-decoration-underline">{{ i?.stat?.name }}</b>
            <div class="d-flex justify-content-between">
            
              <div class="progress w-75">
                <div
               
                  class="progress-bar test progress-bar-striped "
                  :class="pokemon.types[0].color"
                  role="progressbar "
                  aria-label="Example with label"
                  aria-valuenow=""
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{ width: i?.base_stat + '%' }"
                >
                  {{ i?.base_stat }}
                </div>
              </div>
       
            </div>
          </li>
        </ul>
     
      </div>
    </div>
    <div class="collapse show" id="collapseMoves">
      <div class="card-body">
       
          <ul class="list-group border-0 mt-2">
          <li v-for="i in pokemon?.moves" class="list-group-item">
        
            <b>{{ i.move.name }}</b>
          
          </li>
        </ul>
         <ul class="list-group border-0 mt-2">
          <li v-for="i in pokemon?.abilities" class="list-group-item">
        
            <b>{{ i.ability.name }}</b>
          
          </li>
        </ul>
      </div>
    </div>


       <div class="collapse" id="collapseEvolutions">
      <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item"> <img :src="pokemon?.sprites.other.dream_world.front_default" alt="" class="img-fluid"></li>
        <li class="list-group-item"> <img :src="pokemon?.sprites.front_shiny" alt="" class="img-fluid w-100"></li>
        <li class="list-group-item"> <img :src="pokemon?.sprites.other.home.front_default" alt="" class="img-fluid"></li>
       
        <!-- <li></li> -->
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { PokemonDetail } from "../models/PokemonDetail.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
   
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      bar: computed(() => props?.pokemon?.stats?.map((s) => s.base_stat)),
      pokemon: computed(() => AppState.activePokemon),
      img: computed(
        () =>
          AppState.activePokemon?.sprites.other["official-artwork"]
            .front_default
      ),
    };
  },
};
</script>

<style lang="scss" scoped>
.pokemonImg {
  position: absolute;
  top: -120px;
  right: -85px;
  z-index: 9;
}
.test {
  width: v-bind(bar);
}
</style>
