<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 ">
     <h1> Guess That Pokemon</h1>
     <button class="btn btn-danger" @click="getRandomPokemon1()">Random Pokemon</button>
     <button class="btn btn-danger" @click="revealPokemon()">Reveal Pokemon</button>
    </div>

      <div class="col-md-4 d-flex justify-content start align-items-center me-5 ">
     <GuessCard :pokemon="pokemon"   class="poke"
     :class="revealed ==1?  '':'greyOut'" />
      </div>
      <div class="col-md-2 ms-5">
       <h5 class="rounded p-1 bg-light text-center"> Take a Guess</h5>
        <!-- <ul class="list-group">
          
          <li class="list-group-item text-center my-1">  <p class="fw-bold fs-3"> {{pokemon.name}}</p> </li>
          <li class="list-group-item text-center my-1">  <p class="fw-bold fs-3"> {{pokemon.name}}</p> </li>
          <li class="list-group-item text-center my-1">  <p class="fw-bold fs-3"> {{pokemon.name}}</p> </li>
          <li class="list-group-item text-center my-1">  <p class="fw-bold fs-3"> {{pokemon.name}}</p> </li>
        </ul> -->
      </div>
  </div>
</div>

<div class="modal fade" id="AniPopup" tabindex="-1" role="dialog" aria-labelledby="AniPopupLabel" aria-hidden="true" data-close="15" data-open="2" data-src="https://www.youtube.com">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="memberModalLabel">Popup Header</h4>
      </div>
      <div class="modal-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quas.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        <span class="will-close">will be closed after : <strong>n</strong> seconds</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from "../services/PokemonService.js"
import Pop from "../utils/Pop.js"
export default {
  setup() {
onMounted(()=> {
  // getRandomPokemon()
})
    async  function getRandomPokemon(){
try {
    await pokemonService.getRandomPokemon()
  } catch (error) {
    Pop.error(error,'[getRandomPokemon]')
  }
    }
    return {
      pokemon: computed(() => AppState.activePokemon),
      account: computed(() => AppState.account),
      revealed: computed(() => AppState.reveal),
      
async getRandomPokemon1(){
  try {
    AppState.activePokemon=null
    AppState.reveal=0
      await pokemonService.getRandomPokemon()
    } catch (error) {
      Pop.error(error,'[]')
    }
},
revealPokemon(){
AppState.reveal =1
   Pop.toast('Next Pokemon in...','warning','top-end',4000)
setTimeout(() => {
   this.getRandomPokemon1()
  AppState.activePokemon=null
}, 4000);

//  this.getRandomPokemon1()
}

    }
  }
}
</script>

<style scoped>
.greyOut{
filter: grayscale(100%);
filter: brightness(0%);
}
.poke{
  transition: all 0.25s ease;
}

</style>
