const PokedexEntry = ({selectedPokemon}) => {

    const pokemon = selectedPokemon

    const findTypes = () => {
        return pokemon.types.map((element, index)=> {
            const type = element.type.name
            return <li className={type} key={index}>{type}</li>
        })
    }

    return(
        <section>
            <img src={pokemon.sprites.front_default} alt="selected pokemon" />
            <h4>{pokemon.name}</h4>
            <p>Height: {(pokemon.height)/10}m</p>
            <p>Weight: {(pokemon.weight/10)}kg</p>
            <ul>
                Type: {findTypes()} 
            </ul>
        </section>
    )
}

export default PokedexEntry