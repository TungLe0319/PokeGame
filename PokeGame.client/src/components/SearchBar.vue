<template>
    <div class="row justify-content-center">
      <div class="col-md-6 d-fex align-items-center">
        <form @submit.prevent="searchByQuery()">

          <div class="input-group mb-3 rounded-5 elevation-5 searchContainer">
      <button class="btn  d-flex justify-content-center " type="submit" ><i class="mdi mdi-magnify fs-2"></i></button>
      <input v-model="editable" type="text" class="form-control rounded-5" aria-label="Username" placeholder="What pokemon do you want to search for?" aria-describedby="basic-addon1"
      >
    </div>
        </form>
      </div>
      <div class="col-md-1">
        <router-link :to="{name: 'Guess', params:{ }}"> 
        <button class="btn btn-danger"> Play GuessWho </button>
        </router-link>
      </div>
    </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{

       },
  setup(props) {
    const editable = ref('');
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
        async searchByQuery() {
              try {
                await  pokemonService.searchByQuery(editable.value);
                editable = ''
              } catch (error) {
                
                // Pop.error( "Refine Your Search");
              }
            },
      }
    }
  }
</script>

<style lang="scss" scoped>
.searchContainer{
  transition: all 0.25s ease;
}
.searchContainer:hover{
color: rgb(249, 238, 238);
background-color: purple;
transition: all 0.25s ease;
}
</style>
