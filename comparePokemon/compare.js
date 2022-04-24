var card1 = document.getElementsByClassName('pokemonCard1');
const fpokemon = document.querySelectorAll('pokedexMoves');
var tbodyRef = document.getElementById('movesTableL');
var tbodyRefTM = document.getElementById('movesTML');
var tbodyRefR = document.getElementById('movesTableR');
var tbodyRefTMR = document.getElementById('movesTMR');
const searchBarL = document.getElementById('searchBarL');
const searchBarR = document.getElementById('searchBarR');
var listL = document.getElementById('myListL');
var listR = document.getElementById('myListR');
var displayL = document.getElementById('displayL');
var displayR = document.getElementById('displayR');
var statContainerL = document.getElementById('base_Stat_ContainerL');
var statContainerR = document.getElementById('base_Stat_ContainerR');
const newListItem = document.createElement("li")

let pokemon = [];

const loadComparePokemon = () => {
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
            moves: result.moves,
            stats: result.stats,
        }));
        console.log(pokemon);
    })
}

loadComparePokemon();

searchBarL.addEventListener('keyup', (e) => {
    //search is not case sensitive
    //convert name to lowercase and then compare
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemon.filter((pokemon) => {
        return (
            pokemon.name.toLowerCase().includes(searchString) 
        );
    });
    displayDropdownL1(filteredPokemon);
});

searchBarR.addEventListener('keyup', (e) => {
    //search is not case sensitive
    //convert name to lowercase and then compare
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemon.filter((pokemon) => {
        return (
            pokemon.name.toLowerCase().includes(searchString) 
        );
    });
    displayDropdownR1(filteredPokemon);
});


function displayMovesL (pokemon){
    tbodyRef.innerHTML = `<tr>
                                <th>LV</th>
                                <th>Move</th>
                                <th>Method Learned</th>
                         </tr>` 

    tbodyRefTM.innerHTML = `<tr>
                         <th>LV</th>
                         <th>Move</th>
                         <th>Method Learned</th>
                  </tr>` 

    pokemon.moves.forEach(function (value, i) {

        if(pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].move_learn_method.name == "level-up") {
            // Creates a new row
        var newRow = tbodyRef.insertRow(-1);

        // Creates and adds the level need to learn the move.
        const learnLevel = 
        `
            ${pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].level_learned_at}
        `;
        var moveCell1 = newRow.insertCell(0);
        moveCell1.innerHTML += learnLevel

        
        // Crates and adds the name of the move.
        var moveCell2 = newRow.insertCell(1);
        const pokemonHTMLstring = 
        `
            ${pokemon.moves[i].move.name}
        `;
        var newText = document.createTextNode(pokemonHTMLstring);
        moveCell2.appendChild(newText);

        var moveCell3 = newRow.insertCell(2);
        const pokemonHTMLstring1 = 
        `
        ${pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].move_learn_method.name}
        `;
        var newText = document.createTextNode(pokemonHTMLstring1);
        moveCell3.appendChild(newText);
        }
        else{
            var newRow = tbodyRefTM.insertRow(-1);

        // Creates and adds the level need to learn the move.
        const learnLevel = 
        `
            ${pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].level_learned_at}
        `;
        var moveCell1 = newRow.insertCell(0);
        moveCell1.innerHTML += learnLevel

        
        // Crates and adds the name of the move.
        var moveCell2 = newRow.insertCell(1);
        const pokemonHTMLstring = 
        `
            ${pokemon.moves[i].move.name}
        `;
        var newText = document.createTextNode(pokemonHTMLstring);
        moveCell2.appendChild(newText);

        var moveCell3 = newRow.insertCell(2);
        const pokemonHTMLstring1 = 
        `
        ${pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].move_learn_method.name}
        `;
        var newText = document.createTextNode(pokemonHTMLstring1);
        moveCell3.appendChild(newText);
        }
       
    });

}

function displayMovesR (pokemon){
    tbodyRefR.innerHTML = `<tr>
                                <th>LV</th>
                                <th>Move</th>
                                <th>Method Learned</th>
                         </tr>` 

    tbodyRefTMR.innerHTML = `<tr>
                         <th>LV</th>
                         <th>Move</th>
                         <th>Method Learned</th>
                  </tr>` 

    pokemon.moves.forEach(function (value, i) {

        if(pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].move_learn_method.name == "level-up") {
            // Creates a new row
        var newRow = tbodyRefR.insertRow(-1);

        // Creates and adds the level need to learn the move.
        const learnLevel = 
        `
            ${pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].level_learned_at}
        `;
        var moveCell1 = newRow.insertCell(0);
        moveCell1.innerHTML += learnLevel

        
        // Crates and adds the name of the move.
        var moveCell2 = newRow.insertCell(1);
        const pokemonHTMLstring = 
        `
            ${pokemon.moves[i].move.name}
        `;
        var newText = document.createTextNode(pokemonHTMLstring);
        moveCell2.appendChild(newText);

        var moveCell3 = newRow.insertCell(2);
        const pokemonHTMLstring1 = 
        `
        ${pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].move_learn_method.name}
        `;
        var newText = document.createTextNode(pokemonHTMLstring1);
        moveCell3.appendChild(newText);
        }
        else{
            var newRow = tbodyRefTMR.insertRow(-1);

        // Creates and adds the level need to learn the move.
        const learnLevel = 
        `
            ${pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].level_learned_at}
        `;
        var moveCell1 = newRow.insertCell(0);
        moveCell1.innerHTML += learnLevel

        
        // Crates and adds the name of the move.
        var moveCell2 = newRow.insertCell(1);
        const pokemonHTMLstring = 
        `
            ${pokemon.moves[i].move.name}
        `;
        var newText = document.createTextNode(pokemonHTMLstring);
        moveCell2.appendChild(newText);

        var moveCell3 = newRow.insertCell(2);
        const pokemonHTMLstring1 = 
        `
        ${pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].move_learn_method.name}
        `;
        var newText = document.createTextNode(pokemonHTMLstring1);
        moveCell3.appendChild(newText);
        }
       
    });

}


function displayDropdownL(){
    searchBarL.value = "";
    listL.innerHTML = " ";
    pokemon.forEach(function (value , i) {
        let newNode = document.createElement("li");
        const textNode = document.createTextNode(pokemon[i].name);
        newNode.appendChild(textNode);
        newNode.onclick = function () {
            displayMovesL(pokemon[i]);
            displayPokemonL(pokemon[i]);
            diaplayStatsL(pokemon[i]);
            listL.innerHTML = " ";
            listL.style.display = "none";
        }
        listL.style.display = "block";
        listL.insertBefore(newNode, listL.children[listL.children.length]);
    });
}

function displayDropdownR(){
    searchBarR.value = "";
    listR.innerHTML = " ";
    pokemon.forEach(function (value , i) {
        let newNode = document.createElement("li");
        const textNode = document.createTextNode(pokemon[i].name);
        newNode.appendChild(textNode);
        newNode.onclick = function () {
            displayMovesR(pokemon[i]);
            displayPokemonR(pokemon[i]);
            diaplayStatsR(pokemon[i]);
            listR.innerHTML = " ";
            listR.style.display = "none";
        }
        listR.style.display = "block";
        listR.insertBefore(newNode, listR.children[listR.children.length]);
    });
}

function displayDropdownL1(pokemon){
    listL.innerHTML = " ";
    pokemon.forEach(function (value , i) {
        let newNode = document.createElement("li");
        const textNode = document.createTextNode(pokemon[i].name);
        newNode.appendChild(textNode);
        newNode.onclick = function () {
            displayMovesL(pokemon[i]);
            displayPokemonL(pokemon[i]);
            diaplayStatsL(pokemon[i]);
            listL.innerHTML = " ";
            listL.style.display = "none";
            searchBarL.value = "";
        }
        listL.style.display = "block";
        listL.insertBefore(newNode, listL.children[listL.children.length]);
    });
}

function displayDropdownR1(pokemon){
    listR.innerHTML = " ";
    pokemon.forEach(function (value , i) {
        let newNode = document.createElement("li");
        const textNode = document.createTextNode(pokemon[i].name);
        newNode.appendChild(textNode);
        newNode.onclick = function () {
            displayMovesR(pokemon[i]);
            displayPokemonR(pokemon[i]);
            diaplayStatsR(pokemon[i]);
            listR.innerHTML = " ";
            listR.style.display = "none";
            searchBarR.value = "";
        }
        listR.style.display = "block";
        listR.insertBefore(newNode, listR.children[listR.children.length]);
    });
}

function displayPokemonL(pokemon) {
    displayL.style.display = "block";
    const pokemonHTMLstring = 
            `
    <li class ="card">
        <img class="card-image" src="${pokemon.image}" />
        <h2 class="card-title">${pokemon.id}. ${pokemon.name} </h2>
        <p class="card-subtitle">Type: ${pokemon.type}</p>
    </li>
    `;
    displayL.innerHTML = pokemonHTMLstring;
}

function displayPokemonR(pokemon) {
    displayR.style.display = "block";
    const pokemonHTMLstring = 
            `
    <li class ="card">
        <img class="card-image" src="${pokemon.image}" />
        <h2 class="card-title">${pokemon.id}. ${pokemon.name} </h2>
        <p class="card-subtitle">Type: ${pokemon.type}</p>
    </li>
    `;
    displayR.innerHTML = pokemonHTMLstring;
}

function diaplayStatsL(pokemon) {
    statContainerL.innerHTML = " ";
    pokemon.stats.forEach(function (value , i) {
        console.log(i);
        const statsHtml = `
        <div id="progress_container" style="display: block;">
        <div id="progress_container_text">
         <div id="progress_container_text_align_center">${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}</div>
        </div>
        <div id="loading_bar${i}" style="width:${pokemon.stats[i].base_stat}%;"></div>
        </div>
        `
    statContainerL.innerHTML += statsHtml;
    }) 
}

function diaplayStatsR(pokemon) {
    statContainerR.innerHTML = " ";
    pokemon.stats.forEach(function (value , i) {
        console.log(i);
        const statsHtml = `
        <div id="progress_container" style="display: block;">
        <div id="progress_container_text">
         <div id="progress_container_text_align_center">${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}</div>
        </div>
        <div id="loading_bar${i}" style="width:${pokemon.stats[i].base_stat}%;"></div>
        </div>
        `
    statContainerR.innerHTML += statsHtml;
    }) 
}

/*
<div id="progress_container_text">
{ <div id="progress_container_text_align_center">126</div>
</div>
<div id="progress_container_text">
    <div id="progress_max_container_text_align_center">250</div>
</div>
<div id="loading_bar"></div>} */