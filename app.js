const pokedex = document.getElementById('pokedex');
const searchBar = document.getElementById('searchBar');
let pokemon = [];

searchBar.addEventListener('keyup', (e) => {

    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemon.filter((pokemon) => {
        return (
            pokemon.name.toLowerCase().includes(searchString) 
            || pokemon.id <= searchString
        );
    });
    displayPokemon(filteredPokemon);
});

const loadPokemon = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=550');
        data = await res.json();
        pokemon = data.results.map( (results , index)  => ({
           name: results.name,
           apiUrl: results.url,
           id: index + 1,
           image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));
        console.log(data.results);
        displayPokemon(pokemon);
    } catch (err) {
        console.error(err);
    }
};

const displayPokemon = (pokemon) => {
    const pokemonHTMLstring = pokemon
    .map (
        ( pokeman )=> 
            `
    <li class ="card" onclick = "selectPokemon(${
        pokeman.id})">
        <img class="card-image" src="${pokeman.image}" />
        <h2 class="card-title">${pokeman.id}. ${pokeman.name} </h2>
    </li>
    `).join('');
    pokedex.innerHTML = pokemonHTMLstring;
}

const selectPokemon = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    displayWindow(pokeman);
};

const displayWindow = (pokeman) => {
    const type = pokeman.types.map((type) => 
    type.type.name).join(', ');
    const image = pokeman.sprites['front_default'];
    const HTMLstring =`
        <div class = "popup">
            <button id="closeButton" onclick="closePopup()
            ">Close</button>
            <div class="card">
                <img class="card-image" src='${image}'/>
                <h2 class="card=title">${pokeman.id}. ${pokeman.name}
                </h2>
                <p><small>Height: </small>${pokeman.height}'
                | <small>Weight: </small>${pokeman.weight}lbs 
                | <small>Type: </small>${type}
                </p>
            </div>
        </div>
        `
    displayPokemon(pokemon);    
    pokedex.innerHTML = HTMLstring + pokedex.innerHTML;
    console.log(pokeman);
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

loadPokemon();