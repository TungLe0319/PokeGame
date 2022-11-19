<template>
<div class="card border-0 bg-transparent p-0" v-if="pokemon">
 <img :src="pokemon?.img" alt="" height="600" width="600"  class="animate__animated animate__fadeIn animate__delay-1s"/>
 <div class="card-body p-0">
  <p class="name animate__animated animate__fadeIn animate__delay-1s" v-if="revealed==1">  {{pokemon?.name}}</p>
 </div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { PokemonDetail } from "../models/PokemonDetail.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{
pokemon:{type: PokemonDetail}
       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
      revealed: computed(()=> AppState.reveal)
      }
    }
  }
</script>

<style lang="scss" scoped>

.name{
  font-size: 60px;
  font-weight: 700;
}
</style>
