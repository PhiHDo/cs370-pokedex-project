const pokedex = document.getElementById('pokedex');
const searchBar = document.getElementById('searchBar');
let pokemon = []; //array of pokemon from the fetch pokemon function

//Search bar
//allows user to search for pokemon
searchBar.addEventListener('keyup', (e) => {
    //search is not case sensitive
    //convert name to lowercase and then compare
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemon.filter((pokemon) => {//returns array of filter pokemon
        return (
            pokemon.name.toLowerCase().includes(searchString)
        );
    });
    displayPokemon(filteredPokemon);
});

//fetches data on pokemon from the pokemon api
const fetchPokemon = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150');
        data = await res.json();
        pokemon = data.results.map( (results , index)  => ({
            name: results.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));
        displayPokemon(pokemon);
    } catch (err) {
        console.error(err);
    }
};
    
//displays Pokemon's image, name, and type
const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map((pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();