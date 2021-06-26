const PokedexSelect = ({allPokemon, pokemonSelected}) => {

    const pokemonSelectOptions = allPokemon.map((pokemon, index) => {
        return <option key={index} value={index}>{pokemon.name}</option>
    })

    const handleChange = event => {
        const pokemonChoice = event.target.value
        pokemonSelected(allPokemon[pokemonChoice])
        
    }

    return(
        <select name="" id="" defaultValue='default' onChange={handleChange}>
            <option value="default" disabled>Pick a Pokemon!</option>
            {pokemonSelectOptions}
        </select>
    )
}

export default PokedexSelect