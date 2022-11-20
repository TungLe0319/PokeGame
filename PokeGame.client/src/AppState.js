import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Pokemon.js').Pokemon[]} */
  pokemon: [],

  
  
  /** @type {import('./models/PokemonDetail.js').PokemonDetail | null} */
  activePokemon: null,

  pokemonSpecies:{},
  pokemonForms:{},
  pokemonGrowthRate:{},
  pokemonEvolution:{},

  reveal:0,


  offset:0
});
