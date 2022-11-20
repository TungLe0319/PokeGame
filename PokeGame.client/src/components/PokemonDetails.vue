<template>
  <div class="card mt-2 rounded-4 position-relative w-100 p-3" v-if="pokemon">
    <div class="pokemonImgDiv">
      <img
        :src="pokemon?.img"
        alt=""

        class="animate__animated animate__fadeIn pokemonImg"
      />
    </div>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active fw-bold" id="stats-tab" data-bs-toggle="tab" data-bs-target="#stats-tab-pane" type="button" role="tab" aria-controls="stats-tab-pane" aria-selected="true">Stats</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link fw-bold text-dark" id="ability-tab" data-bs-toggle="tab" data-bs-target="#ability-tab-pane" type="button" role="tab" aria-controls="ability-tab-pane" aria-selected="false">Abilities</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link fw-bold text-dark" id="evolution-tab" data-bs-toggle="tab" data-bs-target="#evolution-tab-pane" type="button" role="tab" aria-controls="evolution-tab-pane" aria-selected="false">Evolutions</button>
  </li>

</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="stats-tab-pane" role="tabpanel" aria-labelledby="stats-tab" tabindex="0">
   <div class="card-body">
        <div>
          <span class="badge rounded-pill text-dark">
            Weight: {{ pokemon.weight }}</span
          >
          <span class="badge rounded-pill text-dark">
            Height: {{ pokemon.height }}</span
          >
        
          
        </div>
     
        <div class="d-flex">
          <ul class="list-group border-0">
            <li class="list-group-item border-0">
              <i class="mdi mdi-heart fs-4"></i>
            </li>
            <li class="list-group-item pt-3 border-0">
              <i class="mdi mdi-sword fs-4"></i>
            </li>
            <li class="list-group-item border-0 pt-3">
              <i class="mdi mdi-shield fs-4"></i>
            </li>
            <li class="list-group-item border-0 pt-2">
              <i class="mdi mdi-meteor fs-4"></i>
            </li>
            <li class="list-group-item border-0 pt-2">
              <i class="mdi mdi-turtle fs-4"></i>
            </li>
            <li class="list-group-item border-0 pt-3">
              <i class="mdi mdi-clock-fast fs-4"></i>
            </li>
          </ul>
          <ul class="list-group border-0 w-100">
            <li v-for="i in pokemon?.stats" class="list-group-item">
              <b class="text-decoration-underline">{{ i?.stat?.name }}</b>
              <div class="d-flex justify-content-between">
                <div class="progress w-75">
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
  <div class="tab-pane fade" id="ability-tab-pane" role="tabpanel" aria-labelledby="ability-tab" tabindex="0">
    <div class="card-body scrollY">
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
  <div class="tab-pane fade" id="evolution-tab-pane" role="tabpanel" aria-labelledby="evolution-tab" tabindex="0">
   <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            <img
              :src="pokemon?.sprites.other.dream_world.front_default"
              alt=""
              class="img-fluid"
            />
          </li>
          <li class="list-group-item">
            <img
              :src="pokemon?.sprites.front_shiny"
              alt=""
              class="img-fluid w-100"
            />
          </li>
          <li class="list-group-item">
            <img
              :src="pokemon?.sprites.other.home.front_default"
              alt=""
              class="img-fluid"
            />
          </li>

          <!-- <li></li> -->
        </ul>
      </div>
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
.scrollY{
  height: 350px;
  overflow-y: auto;
}
.pokemonImgDiv {
  position: absolute;
  top: -200px;
  right: 05px;
  z-index: 9;
.pokemonImg{
  width: 300px;
  height: 300px;
}
}
.test {
  width: v-bind(bar);
}

//when screen is 768px OR LESS
@media only screen and (max-width: 768px){
.pokemonImg{
  width: 20px;
height:45px
}
}
</style>
