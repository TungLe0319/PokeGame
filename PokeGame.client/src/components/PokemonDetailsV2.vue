<template>
  .
  <div class="container-fluid" v-if="pokemon">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>{{ pokemon.name.toUpperCase() }}</h1>
      </div>
      <div class="col-md-4">
        <div class="card bg-transparent border-0">
          <div>
            <p>Id #{{ pokemon.id }}</p>
          </div>
          <div>
            <p>Height {{ (pokemon.height * 0.1).toFixed(1) }}m</p>
          </div>
          <div>
            <p>Weight {{ (pokemon.weight * 0.1).toFixed(1) }}kg</p>
          </div>
          <div class="d-flex">
            <p>Abilities</p>
            <div class="d-flex">
              <span
                class="badge rounded-pill text-dark"
                v-for="a in pokemon.abilities"
              >
                {{ a.ability.name }}
              </span>
            </div>
          </div>
          <div class="d-flex">
            <p>Type</p>
            <div class="d-flex">
              <span
              :class="'bg-'+t.type.name"
                class="badge rounded-pill text-dark"
                v-for="t in pokemon.types"
              >
                {{ t.type.name }}
              </span>
            </div>
          </div>
          <div class="d-flex">
            <span
              class="badge rounded-pill text-dark"
              v-for="f in pokemon.forms"
            >
              {{ f.name }}
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="" v-if="pokemon">
          <img
            :src="pokemon?.img"
            alt=""
            class="animate__animated animate__fadeIn img-fluid"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="d-flex">
          <ul class="list-group border-0 w-100 bg-transparent">
            <li
              v-for="i in pokemon?.stats"
              class="list-group-item border-0 bg-transparent"
            >
              <p class="mb-0">{{ i?.stat?.name }}</p>
              <div class="d-flex justify-content-between">
                <div class="progress w-100">
                  <div
                    class="progress-bar test progress-bar-striped"
                    :class="pokemon.types[0].color"
                    role="progressbar "
                    aria-label="Example with label"
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="150"
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
    </div>

    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="rounded p-1 "> Evolution Chain</h2>
      </div>
      <div class="col-md-4">
        {{evolutions.chain.species.name}}
        
      </div>
     
      <div class="col-md-4">
        {{evolutions.chain.evolves_to[0].species.name}}
      
      </div>
     
      <div class="col-md-4">
        {{evolutions.chain.evolves_to[0].evolves_to[0].species.name}}
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
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      bar: computed(() => props?.pokemon?.stats?.map((s) => s.base_stat)),
      pokemon: computed(() => AppState.activePokemon),
      evolutions:computed(() => AppState.pokemonEvolution),
      growth:computed(() => AppState.pokemonGrowthRate),
      forms:computed(() => AppState.pokemonForms),
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
.scrollY {
  height: 350px;
  overflow-y: auto;
}
.pokemonImgDiv {
  position: absolute;
  top: -200px;
  right: 05px;
  z-index: 9;
}
.test {
  width: v-bind(bar);
}

//when screen is 768px OR LESS
@media only screen and (max-width: 768px) {
  .pokemonImg {
    width: 20px;
    height: 45px;
  }
}
</style>
