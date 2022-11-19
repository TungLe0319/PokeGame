<template>
  <div
    :class="(active ? 'active' : pokemon.types[0].color )"
    class="my-2 hover selectable card elevation-5 rounded-4 p-2 border-0"
    @click="getDetails(pokemon)"
  >
    <!-- <h6 class="ms-2">#{{ pokemon.id }}</h6> -->
    <div class="row">
      <div class="col-md-6">
 <h4 class="mb-2 d-flex align-items-center ms-2  fw-bold">
      {{ pokemon?.name }}
    </h4>
    <div class="d-flex justify-content-around">
      <p
        class="p-1 px-2 elevation-4  rounded-5 text-center text-light fw-bold "
        v-for="t in pokemon.types"
        :class="t.color"
      >
        {{ t.type.name }}
      </p>
    </div>

      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-center ">
 <div class="d-flex justify-content-end pokeBg">

      <img :src="pokemon?.img" alt="" width="100" height="100" />

    </div>
      </div>
    </div>
   
   
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { PokemonDetail } from "../models/PokemonDetail";
import { pokemonService } from "../services/PokemonService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    pokemon: { type: PokemonDetail },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {
      // getTypeColor();
    });
    watchEffect(() => {});

    // function getTypeColor(name) {
    //   if (name == "grass") {
    //     return "bg-success";
    //   }
    // }

    return {
      editable,
      color23: computed(() => props.pokemon?.types.color),
      active: computed(
        () => AppState.activePokemon?.name == props.pokemon?.name
      ),
      async getDetails(pokemon) {
        try {
          AppState.activePokemon = pokemon;
          // let id = props.pokemon.id;
          // await pokemonService.getPokemonDetails(id);
        } catch (error) {
          Pop.error(error, "[getDetails]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.pokeBg{

  backdrop-filter: 40px;

}
.active{
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
 transform: scale(1.01);
  transition: all 0.25s ease;
  filter: saturate(120%);
  filter: brightness(120%);
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
}
.test2 {
  background-color: v-bind(color23);
}
.hover {
    background-image: url(https://cdn-icons-png.flaticon.com/512/361/361998.png);
  background-size: 100px;
  background-position: 385px;
  background-repeat: no-repeat;
  
  transition: all 0.25s ease;
  padding: 3px;
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.hover:hover {
  transform: scale(1.01);
  transition: all 0.25s ease;
  filter: saturate(120%);
  filter: brightness(120%);
  background-color: rgba(128, 128, 128, 0.425);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
</style>
