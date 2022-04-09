const pokedex = document.getElementById('pokedex');
const searchBar = document.getElementById('searchBar');
const hnumber = document.getElementById('hnumber');
const lnumber = document.getElementById('lnumber');
const atoz = document.getElementById('atoz');
const ztoa = document.getElementById('ztoa');
const g9 = document.getElementById('g9');
const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const g3 = document.getElementById('g3');
const g4 = document.getElementById('g4');
const g5 = document.getElementById('g5');
const g6 = document.getElementById('g6');
const g7 = document.getElementById('g7');
const g8 = document.getElementById('g8');
//array for each genereation of pokemon.
let gen1 = [];
let gen2 = [];
let gen3 = [];
let gen4 = [];
let gen5 = [];
let gen6 = [];
let gen7 = [];
let gen8 = [];
let pokemon = [];  //array of pokemon from the fetch pokemon function
let currentPokemon = []; //array of pokemon that are currently being displayed

//Search bar
//allows user to search for pokemon
searchBar.addEventListener('keyup', (e) => {
    //search is not case sensitive
    //convert name to lowercase and then compare

    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemon.filter((pokemon) => {
        return (
            pokemon.name.toLowerCase().includes(searchString) 
            || pokemon.id <= searchString
        );
    });
    displayPokemon(filteredPokemon);
});

hnumber.addEventListener('click' , (e) => {
        console.log(e);
            pokemonR = currentPokemon.slice().sort((a , b) => (a.id < b.id) ? 1 : -1);
            currentPokemon = pokemonR;
            displayPokemon(pokemonR);     
})

lnumber.addEventListener('click' , (e) => {
        console.log(e);
            pokemonR = currentPokemon.slice().sort((a , b) => (a.id > b.id) ? 1 : -1);
            currentPokemon = pokemonR;
            displayPokemon(pokemonR);
})

atoz.addEventListener('click' , (e) => {
        console.log(e);
            pokemonR = currentPokemon.slice().sort((a , b) => (a.name > b.name) ? 1 : -1);
            currentPokemon = pokemonR;
            displayPokemon(pokemonR);
})

ztoa.addEventListener('click' , (e) => {
        console.log(e);
            pokemonR = currentPokemon.slice().sort((a , b) => (a.name < b.name) ? 1 : -1);
            currentPokemon = pokemonR;
            displayPokemon(pokemonR);
})

g9.addEventListener('click' , (e) => {
    currentPokemon = pokemon;
    lnumber.checked = true;
    displayPokemon(currentPokemon);
})

g1.addEventListener('click' , (e) => {
    gen1 = pokemon.filter((currentPokemon) => {
        return ( 
            currentPokemon.id <= 151
        );
    });
    currentPokemon = gen1; 
    lnumber.checked = true;
    displayPokemon(gen1)
})

g2.addEventListener('click' , (e) => {
    gen2 = pokemon.filter((currentPokemon) => {
        return ( 
            currentPokemon.id > 151 && currentPokemon.id <= 251
        );
    });
    currentPokemon = gen2; 
    lnumber.checked = true;
    displayPokemon(gen2)
    
})

g3.addEventListener('click' , (e) => {
    gen3 = pokemon.filter((currentPokemon) => {
        return ( 
            currentPokemon.id > 251 && currentPokemon.id <=386
        );
    });
    currentPokemon = gen3; 
    lnumber.checked = true;
    displayPokemon(gen3)
    
})

g4.addEventListener('click' , (e) => {
    gen4 = pokemon.filter((currentPokemon) => {
        return ( 
            currentPokemon.id > 386 && currentPokemon.id <=494
        );
    });
    currentPokemon = gen4;
    lnumber.checked = true; 
    displayPokemon(gen4)
})

g5.addEventListener('click' , (e) => {
    gen5 = pokemon.filter((currentPokemon) => {
        return ( 
            currentPokemon.id > 494 && currentPokemon.id <=649
        );
    });
    currentPokemon = gen5;
    lnumber.checked = true; 
    displayPokemon(gen5)
    
})

g6.addEventListener('click' , (e) => {
    gen6 = pokemon.filter((currentPokemon) => {
        return ( 
            currentPokemon.id > 649 && currentPokemon.id <=721
        );
    });
    currentPokemon = gen6;
    lnumber.checked = true;
    displayPokemon(gen6)
    
})

g7.addEventListener('click' , (e) => {
    gen7 = pokemon.filter((currentPokemon) => {
        return ( 
            currentPokemon.id > 721 && currentPokemon.id <=809
        );
    });
    currentPokemon = gen7;
    lnumber.checked = true;
    displayPokemon(gen7)
    
})

g8.addEventListener('click' , (e) => {
    gen8 = pokemon.filter((currentPokemon) => {
        return ( 
            currentPokemon.id > 809 && currentPokemon.id <=898
        );
    });
    currentPokemon = gen8;
    lnumber.checked = true;
    displayPokemon(gen8)
    
})

//fetches data on pokemon from the pokemon api
const loadPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 898; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            weight: result.weight,
            height: result.height,
            moves: result.moves.map((move) => move.move.name).join(', '),
            stats: result.stats.map((stat) => stat.stat.name).join(', '),
            statValue: result.stats.map((stats) => stats.base_stat).join(', '),
        }));
        currentPokemon = pokemon;
        console.log(pokemon);
        displayPokemon(currentPokemon);
    });
};

//displays Pokemon's image, name, and type
const displayPokemon = (pokemon ) => {
    const pokemonHTMLstring = pokemon
    .map (
        ( pokeman )=> 
            `
    <li class ="card" onclick = "selectPokemon(${
        pokeman.id})">
        <img class="card-image" src="${pokeman.image}" />
        <h2 class="card-title">${pokeman.id}. ${pokeman.name} </h2>
        <p class="card-subtitle">Type: ${pokeman.type}</p>
    </li>
    `).join('');
    pokedex.innerHTML = pokemonHTMLstring;
}


const selectPokemon = (id) => {
    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // const res = await fetch(url);
    const pokeman = pokemon[id-1];
    //console.log(pokeman.id);
    displayWindow(pokeman);
};

//pop up window
const displayWindow = (pokeman) => {
    // const type = pokeman.types.map((type) => 
    // type.type.name).join(', ');
    // const image = pokeman.sprites['front_default'];
    const HTMLstring =`
        <div class = "popup">
            <button id="closeButton"  onclick="closePopup()
            ">Close</button>
            <div class="card1">
                <img class="card-image" src='${pokeman.image}'/>
                <h2 class="card=title">${pokeman.id}. ${pokeman.name}
                </h2>
                <p><small>Height: </small>${pokeman.height}'
                | <small>Weight: </small>${pokeman.weight}lbs 
                | <small>Type: </small>${pokeman.type}
                </p>
                
                <h2>Base Stats</h2>
                <p>${pokeman.stats}</p>
                <p>${pokeman.statValue}</p>

                <h2>Move Pool</h2>
                <p>${pokeman.moves}</p>
            </div>
        </div>
        `
    //displayPokemon(pokemon);    
    pokedex.innerHTML = HTMLstring + pokedex.innerHTML;
    //console.log(pokeman);
};

//close the pop up window
const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

loadPokemon();