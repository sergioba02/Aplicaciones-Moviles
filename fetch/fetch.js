pokemonList();

function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon/4/")
    .then(response => response.json())
    .then(pokemon => {
            console.log("Nombre: ",pokemon.name[0].toUpperCase() + pokemon.name.slice(1),"\n");
            console.log("Habilidades: [", pokemon.abilities['0'].ability.name,", ", pokemon.abilities['1'].ability.name,"]\n");
            console.log("Tipo: ", pokemon.types['0'].type.name,"\n");
            console.log("Stats: ");
            for(let i = 0; i <= 5; i++){
                console.log("   ",(i+1),": [",pokemon.stats[i].stat.name,"=",pokemon.stats[i].base_stat,"]\n");

            }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}