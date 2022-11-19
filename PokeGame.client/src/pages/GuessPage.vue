<template>
<div class="container">
 
    <router-link :to="{name: 'Home'}" class="underline position-absolute sticky-top end-0"> 
   <button class="btn border-0 "> <i class="mdi mdi-home fs-1"></i></button>
    </router-link>
   
  <div class="row">
  
    <div class="col-md-12 ">
 
     <button class="btn actionbtn  " @click="getRandomPokemon1()"><img src="../assets/img/randomtext.png" alt="" width="300" height="100"></button>
     <button class="btn actionbtn " @click="revealPokemon()"><img src="../assets/img/revealtxt.png" alt="" width="300" height="100"></button>
    </div>

      <div class="col-md-4 d-flex justify-content start align-items-center me-5 ">
     <GuessCard :pokemon="pokemon"   class="poke"
     :class="revealed ==1?  '':'greyOut'" />
      </div>
      <div class="col-md-2 ms-5">
       <h5 class="rounded p-1 bg-light text-center"> Take a Guess</h5>
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
.actionbtn{
  transition: all 0.25s ease;
}
.actionbtn:hover{
transform: scale(1.01);
transition: all 0.25s ease;
filter: brightness(80%);
}
.greyOut{
filter: grayscale(100%);
filter: brightness(0%);
}
.poke{
  transition: all 0.25s ease;
}


.underline {
  display: inline;
  position: relative;
  overflow: hidden;
}
.underline:after {
  content: "";
  position: absolute;
  z-index: -1;
  right: 0;
  width: 0;
  bottom: -5px;
  background: #000;
  height: 4px;
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
.underline:hover:after,
.underline:focus:after,
.underline:active:after {
  left: 0;
  right: auto;
  width: 100%;
}
</style>
