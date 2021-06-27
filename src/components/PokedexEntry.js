import '../static/types.css'

const PokedexEntry = ({selectedPokemon}) => {

    const pokemon = selectedPokemon

    const findTypes = () => {
        return pokemon.types.map((element, index)=> {
            const type = element.type.name
            return <li className={type} key={index}>{type}</li>
        })
    }

    return(
        <section id='pokedex-entry'>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt="selected pokemon" />
            <p>Height: {(pokemon.height)/10}m</p>
            <p>Weight: {(pokemon.weight/10)}kg</p>
            <ul id='types-list'>
                Type: {findTypes()} 
            </ul>
        </section>
    )
}

export default PokedexEntry