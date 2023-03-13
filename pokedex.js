
//Conectamos con la api de pokemon

const pokedex = async (busqueda) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`);
        const responseJson = await response.json();
        console.log('response json: ',responseJson);
        return responseJson;
    } catch (error) {
        console.log('Esto es un error',error);
    }
}


// Aquí pintamos los datos que queremos en las tarjetas

const pintar = (datospokemon) => {

    // console.log('name: ', datospokemon.name);
    // console.log('image: ',datospokemon.sprites['front_default']);
    // console.log('type: ', datospokemon.types.map((type) => type.type.name).join(', '));
    // console.log('id: ',datospokemon.id);

    const lista$$ = document.querySelector('#pokedex');
    const li$$ = document.createElement('li');

    const div$$ = document.createElement('div');

    const img$$ = document.createElement('img');
    img$$.setAttribute('src', datospokemon.sprites['front_default']);
    img$$.setAttribute('alt', datospokemon.name);

    const nombre$$ = document.createElement('h2');
    nombre$$.textContent = datospokemon.name;

    const tipo$$ = document.createElement('p');
    tipo$$.setAttribute('class', 'tipo');
    tipo$$.textContent = 'Tipo: ' + datospokemon.types.map((type) => type.type.name).join(', ');

    const idpokemon$$ = document.createElement('p');
    idpokemon$$.setAttribute('class','id');
    idpokemon$$.textContent = 'ID: ' + datospokemon.id;
    
    div$$.appendChild(img$$);
    div$$.appendChild(nombre$$);
    div$$.appendChild(tipo$$);
    div$$.appendChild(idpokemon$$);
    li$$.appendChild(div$$);
    lista$$.appendChild(li$$);

}

//Vamos a coger el input creado en el HTML y le vamos a hacer buscar nuestro pokemones

const cogerInput = (pokemons) => {

    const input$$ = document.querySelector('.buscador');
    input$$.addEventListener('input',() => busqueda.value,pokemons)

}

const busqueda = (filtro,pokemons) =>{

    let pokemonsFiltrados = pokemons.filter((pokemons) => datospokemon.name.toLowercase().includes(filtro))
    pintar(pokemonsFiltrados);
}

//Aquí creamos un bucle que nos devuelva los pokemon desde el 1 al 151 e iniciamos las funciones

const init = async () => {
    // const pokemon = await pokedex(1);
    // console.log('Esto es un pokemon',pokemon);
    // pintar(pokemon);

    for (let i = 1; i <= 151; i++) {
       const pokemon = await pokedex(i);
       pintar(pokemon);
    }
    cogerInput(pokemon);
}

init();