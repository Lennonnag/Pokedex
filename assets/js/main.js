const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 4
let offset = 0;



function loadPokemons(offset, limit) {



    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                    <span class="number">Nº ${pokemon.num}</span>
                    <span class="name">${pokemon.name} </span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type} </li>`).join('')}                      
                        </ol>
    
    
                        <img src="${pokemon.imagem}"
                            alt="${pokemon.name} ">
    
                </div>
            </li>
        ` ).join('');
        pokemonList.innerHTML += newHtml
    })
}

loadPokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemons(offset, limit);
})