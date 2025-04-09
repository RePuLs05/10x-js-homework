const pokemonPower = [
  { name: 'Pikachu', CP: 550 },
  { name: 'Charizard', CP: 840 },
  { name: 'Bulbasaur', CP: 490 }, 
  { name: 'Squirtle', CP: 480 }
];
const filteredPokemon = pokemonPower.filter(p => p.CP >= 500);
console.log(filteredPokemon);
