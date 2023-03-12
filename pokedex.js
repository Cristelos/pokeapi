


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


const init = async () => {
    // const pokemon = await pokedex(1);
    // console.log('Esto es un pokemon',pokemon);
    // pintar(pokemon);

    for (let i = 1; i <= 151; i++) {
       const pokemon = await pokedex(i);
       pintar(pokemon);
    }

}

init();