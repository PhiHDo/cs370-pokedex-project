var card1 = document.getElementsByClassName('pokemonCard1');
const fpokemon = document.querySelectorAll('pokedexMoves');
var movesTableR = document.getElementById('movesTableL');
var movesTableRTM = document.getElementById('movesTML');
var movesTableRR = document.getElementById('movesTableR');
var movesTableRTMR = document.getElementById('movesTMR');
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


//load pokemon into array "pokemon" using count in for loop. Max 898
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


//Search Functionality of left search bar
searchBarL.addEventListener('keyup', (e) => {
    //search is not case sensitive
    //convert name to lowercase and then compare
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemon.filter((pokemon) => {
        return (
            pokemon.name.toLowerCase().includes(searchString) 
        );
    });
    //calls second Left display with pokemon array as parameter
    displayDropdownL1(filteredPokemon);
});

//Search Functionality of right search bar
searchBarR.addEventListener('keyup', (e) => {
    //search is not case sensitive
    //convert name to lowercase and then compare
    const searchString = e.target.value.toLowerCase();
    const filteredPokemon = pokemon.filter((pokemon) => {
        return (
            pokemon.name.toLowerCase().includes(searchString) 
        );
    });
    //calls second Right display with pokemon array as parameter
    displayDropdownR1(filteredPokemon);
});


//displays moves of pokemon that is on the left side
function displayMovesL (pokemon){
    //starts by resesting current moves for incase pokemon is currently selected
    movesTableR.innerHTML = `<tr>
                                <th>LV</th>
                                <th>Move</th>
                                <th>Method Learned</th>
                         </tr>` 

    movesTableRTM.innerHTML = `<tr>
                         <th>LV</th>
                         <th>Move</th>
                         <th>Method Learned</th>
                            </tr>` 

    pokemon.moves.forEach(function (value, i) {

        //first display moves learned by level
        if(pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].move_learn_method.name == "level-up") {
            // Creates a new row
        var newRow = movesTableR.insertRow(-1);

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
        //Display moves not learned by level
        else{
            var newRow = movesTableRTM.insertRow(-1);

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

//displays moves of pokemon that is on the right side
function displayMovesR (pokemon){
        //starts by resesting current moves for incase pokemon is currently selected
    movesTableRR.innerHTML = `<tr>
                                <th>LV</th>
                                <th>Move</th>
                                <th>Method Learned</th>
                         </tr>` 

    movesTableRTMR.innerHTML = `<tr>
                         <th>LV</th>
                         <th>Move</th>
                         <th>Method Learned</th>
                  </tr>` 

    pokemon.moves.forEach(function (value, i) {

        if(pokemon.moves[i].version_group_details[pokemon.moves[i].version_group_details.length - 1].move_learn_method.name == "level-up") {
            // Creates a new row
        var newRow = movesTableRR.insertRow(-1);

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
            var newRow = movesTableRTMR.insertRow(-1);

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
    //starts by reseting list so it doesnt stack if clicked on multiple times
    listL.innerHTML = " ";
    //foreach pokemon in "pokemon" create a new list element with name of 
    //pokemon and onclick function
    pokemon.forEach(function (value , i) {
        let newNode = document.createElement("li");
        const textNode = document.createTextNode(pokemon[i].name);
        newNode.appendChild(textNode);
        //Function used to fill table of moves, base stats, and pokemon image
        newNode.onclick = function () {
            displayMovesL(pokemon[i]);
            displayPokemonL(pokemon[i]);
            diaplayStatsL(pokemon[i]);
            //hide list once pokemon selected
            listL.innerHTML = " ";
            //hide list element when selecting pokemon
            listL.style.display = "none";
        }
        listL.style.display = "block";
        listL.insertBefore(newNode, listL.children[listL.children.length]);
    });
}

function displayDropdownR(){
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

//diplay using with an array of pokemon as a parameter to show a 
//filtered dropdown list
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

//diplay using with an array of pokemon as a parameter to show a 
//filtered dropdown list
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

//Function to display image, id, name, and type once pokemone is selected
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

//Function to display image, id, name, and type once pokemone is selected
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

//Creates pregress bar using base stats of each pokemon
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