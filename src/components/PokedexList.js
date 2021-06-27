const PokedexList = ({allPokemon, pokemonSelected}) => {

    const handleClick = event => {
        const pokemonChoice = event.target.value
        pokemonSelected(allPokemon[pokemonChoice])
    }

    const pokemonListOptions = allPokemon.map((pokemon, index) =>{
        return <li key={index} value={index} onClick={handleClick}>{pokemon.name}</li>
})

    return(
        <ul id='pokemon-list'>
            <li>Pick A Pokemon:</li>
            {pokemonListOptions}
        </ul>
    )
}

export default PokedexList