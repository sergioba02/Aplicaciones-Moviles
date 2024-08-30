pokemonList();

function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(pokemon => {
            console.log(pokemon.name);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}
