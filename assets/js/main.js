




function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">Nº ${pokemon.num}</span>
                <span class="name">${pokemon.name} </span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type} </li>` ).join('')}                      
                    </ol>


                    <img src="${pokemon.imagem}"
                        alt="${pokemon.name} ">

            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHtml
})
