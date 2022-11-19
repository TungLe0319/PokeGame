export class PokemonDetail {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.url = data.url;
    this.img = data.sprites.other["official-artwork"].front_default;
    this.abilities = data.abilities;
    this.forms = data.forms;
    this.species = data.species;
    this.moves=data.moves
  
    this.types = data.types;
    for (const type of this.types) {
      if (type.type.name == 'grass') {
        type.color = 'bg-grass'
        type.bgColor = 'bg-success2'
      }
      if (type.type.name == 'water') {
        type.color = 'bg-water'
      }
      if (type.type.name == 'electric') {
        type.color = 'bg-electric'
      }
      if (type.type.name == 'fire') {
        type.color = 'bg-fire'
      }
      if (type.type.name == 'poison') {
        type.color = 'bg-poison'
      }
      if (type.type.name == 'bug') {
        type.color = 'bg-bug'
      }
      if (type.type.name == 'normal') {
        type.color = 'bg-normal'
      }
      if (type.type.name == 'fairy') {
        type.color = 'bg-fairy'
      }
      if (type.type.name == 'ground') {
        type.color = 'bg-ground'
      }
      if (type.type.name == 'fighting') {
        type.color = 'bg-fighting'
      }
      if (type.type.name == 'ghost') {
        type.color = 'bg-ghost'
      }
      if (type.type.name == 'rock') {
        type.color = 'bg-rock'
      }
      if (type.type.name == 'psychic') {
        type.color = 'bg-psychic'
      }
      if (type.type.name == 'flying') {
        type.color = 'bg-light text-dark'
      }
      // if (type.type.name == 'grass') {
      //   type.color = 'bg-success'
      // }

    }
    this.stats = data.stats
    // this.abilityImg = 
    this.evolutions=data.evolutions
    this.sprites=data.sprites
  }
}
