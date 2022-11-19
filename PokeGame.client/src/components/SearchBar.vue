<template>
  <div class="row justify-content-center">
    <div class="col-md-6 d-fex align-items-center">
      <form @submit.prevent="searchByQuery()">
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

        <div class="pokeNameList" style="z-index: 9999" v-if="editable.term">
          <ul class="list-group scrollY">
            <TransitionGroup
              name=""
              enterActiveClass="animate__fadeInRight animate__animated"
              leaveActiveClass="animate__fadeOutLeft animate__animated"
            >
              <li
                class="list-group-item selectable pokeLi text-dark position-relative d-flex"
                @click="replaceTerm(n.name)"
                v-for="n in names"
                :key="n.name"
              >
                <p class="mb-0 fw-bold">{{ n.name }}</p>
                <div class=""> <i class="mdi arrowLeft mdi-arrow-left fs-5 ms-2 d-flex align-items-center "></i></div>
              </li>
            </TransitionGroup>
          </ul>
        </div>
      </form>
    </div>
    <div class="col-md-1">
      <router-link :to="{ name: 'Guess', params: {} }">
        <button class="btn border-0">
          Play Guess Who!
          <img
            src="https://cdn-icons-png.flaticon.com/512/7887/7887104.png"
            alt=""
            width="80"
            height="80"
          />
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    let editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});
const router = useRouter()
    return {
      router,
      editable,
      names: computed(() =>
        AppState.pokemonName.filter((p) =>
          p.name.toLowerCase().includes(editable.value.term)
        )
      ),
pokemon: computed(() =>
        AppState.pokemonName.filter((p) =>
          p.name.toLowerCase().includes(editable.value.term)
        )
      ),
      async searchByQuery() {
        try {
          await  pokemonService.searchByQuery(editable.value.term);
          router.push({name:"Details",params:{name : editable.value.term}})
         editable = {}
       
        } catch (error) {
          Pop.error(error, "Refine Your Search");
        }
      },
      replaceTerm(name) {
        editable.value.term = name;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.animate__animated.animate__fadeInRight {
  --animate-duration: 500ms;
}
.animate__animated.animate__fadeOutLeft {
  --animate-duration: 500ms;
}
.arrowLeft{
color: white !important;
}
.pokeLi {
  transition: all 0.15s ease;
}
.pokeLi:hover {
  transition: all 0.15s ease;
  background-color: rgb(236, 226, 226);
  
  .arrowLeft{
color: rgb(250, 160, 160) !important;
transition: all 0.15s ease;
}
}
.pokeNameList {
  position: absolute;
  bottom: 0;
  left: 390px;
  top: 180px;
}
.scrollY {
  height: 30vh;
  overflow-y: auto;
}
.searchContainer {
  transition: all 0.25s ease;
}
.searchContainer:hover {
  color: rgb(249, 238, 238);
  background-color: purple;
  transition: all 0.25s ease;
}
</style>
