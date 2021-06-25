const PokedexSelect = ({allPokemon}) => {

    const pokemonSelectOptions = allPokemon.map((pokemon, index) => {
        return <option key={index}>{pokemon.name}</option>
    })
    


    return(
        <select name="" id="" defaultValue='default'>
            <option value="default">Pick a Pokemon!</option>
            {pokemonSelectOptions}
        </select>
    )
}

export default PokedexSelect