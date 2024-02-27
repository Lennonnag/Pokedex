const pokeApi = {}

function convertPokemonDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();

    pokemon.name = pokeDetail.name
    pokemon.num = pokeDetail.id
    pokemon.imagem = pokeDetail.sprites.other.dream_world.front_default   

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    
    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const [ability] = abilities

    pokemon.types = types
    pokemon.type = type

    pokemon.abilities = abilities
    pokemon.ability = ability

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokemonDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit =4) => {    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    }


