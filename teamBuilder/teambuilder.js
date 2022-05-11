var moveSet = [];
let pokemon = [];
var pokemon1 = document.getElementById('card1');
var pokemon2 = document.getElementById('card2');
var pokemon3 = document.getElementById('card3');
var pokemon4 = document.getElementById('card4');
var pokemon5 = document.getElementById('card5');
var pokemon6 = document.getElementById('card6');
var listWrapper = document.getElementById('listWrapper');
var pokemonList = document.getElementById('pokemonList');
var move1 = document.getElementById('move1');
var move5 = document.getElementById('move5');



pokemon1.addEventListener('click', (e) => {
        displayPokemonList(pokemon , e);
        //console.log(e.path[2]);
    
});

pokemon2.addEventListener('click', (e) => {
        displayPokemonList(pokemon , e);
        //console.log(e.path[2]);
});

pokemon3.addEventListener('click', (e) => {
        displayPokemonList(pokemon , e);
        //console.log(e.path[2]);
});

pokemon4.addEventListener('click', (e) => {
        displayPokemonList(pokemon , e);
        //console.log(e.path[2]);
});

pokemon5.addEventListener('click', (e) => {
        displayPokemonList(pokemon , e);
        //console.log(e.path[2]);
});

pokemon6.addEventListener('click', (e) => {
        displayPokemonList(pokemon , e);
        //console.log(e.path[2]);
});

/*  findPokemonMove accepts the number of the pokemon, then it will set
*   StatsMoves with all the pokemon moves' information.
*   
*   @param pokemonNumber : It has to be an intger D{1 , lastPokemon}
*/ 
function findPokemonMove(pokemonUrl){
    fetch(pokemonUrl)
    .then((res) =>{
        return res.json();
    })
    .then((data)=>{
        const pokeman = [];
        pokeman['moves'] = data.moves;
        setStatsMoves(pokeman);
    });

}

/*  This is a helper function for findPokemonMove. It will sets statsMoves.
*   
*   @param pokemon : Variable with moves' data.
*/  
function setStatsMoves(pokeman){
    moveSet.length = 0;
    var urlMoves = [];
    pokeman.moves.forEach(function (value, i) {
        urlMoves[i] = pokeman.moves[i].move.url;

        fetch(urlMoves[i])
        .then((res2)=>{
            return res2.json();
        })
        .then((moveData)=>{
            //console.log(moveData);
            var tempVar = {};
            tempVar['name'] = moveData.name;
            tempVar['id'] = moveData.id;
            tempVar['priority'] = moveData.priority;
            tempVar['acc'] = moveData.accuracy;
            tempVar['power'] = moveData.power;
            tempVar['pp'] = moveData.pp;
            tempVar['type'] = moveData.type.name;
            tempVar['backgroundColor'] = typeToColor(moveData.type.name);
            moveSet[i] = tempVar;

        });
    });
}

function typeToColor(type){
    if(type == 'normal')
        return '#A8A878';
    else if(type == 'fire')
        return '#F08030';
    else if(type == 'water')
        return '#6890F0';
    else if(type == 'grass')
        return '#78C850';
    else if(type == 'electric')
        return '#F8D030';
    else if(type == 'ice')
        return '#98D8D8';
    else if(type == 'fighting')
        return '#C03028';
    else if(type == 'poison')
        return '#A040A0';
    else if(type == 'ground')
        return '#E0C068';
    else if(type == 'flying')
        return '#A890F0';
    else if(type == 'psychic')
        return '#F85888';
    else if(type == 'bug')
        return '#A8B820';
    else if(type == 'rock')
        return '#B8A038';
    else if(type == 'ghost')
        return '#705898';
    else if(type == 'dark')
        return '#705898';
    else if(type == 'dragon')
        return '#7038F8';
    else if(type == 'steel')
        return '#7038F8';
    else if(type == 'fairy')
        return '#F0B6BC';
    else return 'white';
}

const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=898';
    const res = await fetch(url);
    const data = await res.json();
    pokemon = data.results.map((result , index) => 
    ({
        name:result.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        apiUrl: result.url,

    }));
    console.log(pokemon);
}

const displayPokemonList = (pokemon , e) => {
    if(typeof(listWrapper) != 'undefined' && listWrapper != null){
        listWrapper.remove();
    }
        
    listWrapper = document.createElement('div')
    listWrapper.id = 'listWrapper';
    pokemonList = document.createElement('ul')
    pokemonList.id = 'pokemonList';
    pokemon.forEach(function (value , i) {
        let newNode = document.createElement("li");
        newNode.id = 'teamList'
        const textNode = document.createTextNode(pokemon[i].name);
        newNode.appendChild(textNode);
        newNode.onclick = function () {
            displaySprite(pokemon[i] , e);
            selectMoves(pokemon[i] , e);
            resetMoves(e);
            hideMenu();
        }
        pokemonList.insertBefore(newNode, pokemonList.children[pokemonList.children.length]);
    });
    listWrapper.appendChild(pokemonList);
    console.log(listWrapper);    
    document.body.appendChild(listWrapper);
    
};

function displaySprite(pokeman , e){
    console.log(pokeman);
    e.target.src = pokeman.image;
}

function hideMenu() {
    listWrapper.style.display = "none";
}

function selectMoves(pokeman , e) {
    findPokemonMove(pokeman.apiUrl);
    console.log(moveSet);
    if(e.path[2].id == "pokemon1"){
        move1.onclick = function() {
            displayMovesList(pokeman , move1);
        }
        move2.onclick = function() {
            displayMovesList(pokeman , move2);
        }
        move3.onclick = function() {
            displayMovesList(pokeman , move3);
        }
        move4.onclick = function() {
            displayMovesList(pokeman , move4);
        }
    }
    if(e.path[2].id == "pokemon2"){
        move5.onclick = function() {
            displayMovesList(pokeman , move5);
        }
        move6.onclick = function() {
            displayMovesList(pokeman , move6);
        }
        move7.onclick = function() {
            displayMovesList(pokeman , move7);
        }
        move8.onclick = function() {
            displayMovesList(pokeman , move8);
        }
    }
    if(e.path[2].id == "pokemon3"){
        move9.onclick = function() {
            displayMovesList(pokeman , move9);
        }
        move10.onclick = function() {
            displayMovesList(pokeman , move10);
        }
        move11.onclick = function() {
            displayMovesList(pokeman , move11);
        }
        move12.onclick = function() {
            displayMovesList(pokeman , move12);
        }
    }
    if(e.path[2].id == "pokemon4"){
        move13.onclick = function() {
            displayMovesList(pokeman , move13);
        }
        move14.onclick = function() {
            displayMovesList(pokeman , move14);
        }
        move15.onclick = function() {
            displayMovesList(pokeman , move15);
        }
        move16.onclick = function() {
            displayMovesList(pokeman , move16);
        }
    }
    if(e.path[2].id == "pokemon5"){
        move17.onclick = function() {
            displayMovesList(pokeman , move17);
        }
        move18.onclick = function() {
            displayMovesList(pokeman , move18);
        }
        move19.onclick = function() {
            displayMovesList(pokeman , move19);
        }
        move20.onclick = function() {
            displayMovesList(pokeman , move20);
        }
    }
    if(e.path[2].id == "pokemon6"){
        move21.onclick = function() {
            displayMovesList(pokeman , move21);
        }
        move22.onclick = function() {
            displayMovesList(pokeman , move22);
        }
        move23.onclick = function() {
            displayMovesList(pokeman , move23);
        }
        move24.onclick = function() {
            displayMovesList(pokeman , move24);
        }
    }
}

function displayMovesList(pokeman , e) {
    if(typeof(listWrapper) != 'undefined' && listWrapper != null){
        listWrapper.remove();
    }
    listWrapper = document.createElement('div')
    listWrapper.id = 'listWrapper1';
    pokemonList = document.createElement('ul')
    pokemonList.id = 'pokemonList';
    moveSet.forEach(function (value , i) {
        let newNode = document.createElement("li");
        newNode.id = 'moveList';
        const tempText = moveSet[i].name +' - - - - >' + ' Power:' + moveSet[i].power + '  Acc:' + moveSet[i].acc + '  PP:' + moveSet[i].pp;
        const textNode = document.createTextNode(tempText);
        newNode.appendChild(textNode);
        newNode.onclick = function () {
            displayMove(moveSet[i] , e);
            hideMenu();
        }
        pokemonList.insertBefore(newNode, pokemonList.children[pokemonList.children.length]);
    });
    listWrapper.appendChild(pokemonList);
    console.log(listWrapper);    
    document.body.appendChild(listWrapper);
}

//this take the move thats being selected as a parameter and displays it in the correct position
function displayMove(move , e) {
    console.log(e);
    const moveHTML = `
    <p id = "moveName">
     ${move.name}
    </p>
    <p id = "moveStats">
     PW:${move.power}
     Acc:${move.acc}%
     PP: ${move.pp}
     </p>
    
    `
    e.innerHTML = moveHTML;
    e.style.backgroundColor = move.backgroundColor;
    console.log(move.backgroundColor);
}

function resetMoves(e){
    console.log(e);
    if(e.path[2].id == "pokemon1"){
        move1.innerHTML = "";
        move2.innerHTML = "";
        move3.innerHTML = "";
        move4.innerHTML = "";      
        move1.style.backgroundColor = 'white';
        move2.style.backgroundColor = 'white';
        move3.style.backgroundColor = 'white';
        move4.style.backgroundColor = 'white';

    }
    if(e.path[2].id == "pokemon2"){
        move5.innerHTML = "";
        move6.innerHTML = "";
        move7.innerHTML = "";
        move8.innerHTML = "";
        move5.style.backgroundColor = 'white';
        move6.style.backgroundColor = 'white';
        move7.style.backgroundColor = 'white';
        move8.style.backgroundColor = 'white';
    }
    if(e.path[2].id == "pokemon3"){
        move9.innerHTML = "";
        move10.innerHTML = "";
        move11.innerHTML = "";
        move12.innerHTML = "";
        move9.style.backgroundColor = 'white';
        move10.style.backgroundColor = 'white';
        move11.style.backgroundColor = 'white';
        move12.style.backgroundColor = 'white';
    }
    if(e.path[2].id == "pokemon4"){
        move13.innerHTML = "";
        move14.innerHTML = "";
        move15.innerHTML = "";
        move16.innerHTML = "";
        move13.style.backgroundColor = 'white';
        move14.style.backgroundColor = 'white';
        move15.style.backgroundColor = 'white';
        move16.style.backgroundColor = 'white';
    }
    if(e.path[2].id == "pokemon5"){
        move17.innerHTML = "";
        move18.innerHTML = "";
        move19.innerHTML = "";
        move20.innerHTML = "";
        move17.style.backgroundColor = 'white';
        move18.style.backgroundColor = 'white';
        move19.style.backgroundColor = 'white';
        move20.style.backgroundColor = 'white';
    }
    if(e.path[2].id == "pokemon6"){
        move21.innerHTML = "";
        move22.innerHTML = "";
        move23.innerHTML = "";
        move24.innerHTML = "";
        move21.style.backgroundColor = 'white';
        move22.style.backgroundColor = 'white';
        move23.style.backgroundColor = 'white';
        move24.style.backgroundColor = 'white';

    }
}

fetchPokemon();