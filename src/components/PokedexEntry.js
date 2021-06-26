const PokedexEntry = ({selectedPokemon}) => {

    const pokemon = selectedPokemon
    return(
        <section>
            <img src={pokemon.sprites.front_default} alt="selected pokemon" />
            <p>{pokemon.name}</p>
        </section>
    )
}

export default PokedexEntry