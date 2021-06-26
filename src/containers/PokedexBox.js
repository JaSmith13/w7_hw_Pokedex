import {useState, useEffect} from 'react'
import PokedexSelect from '../components/PokedexSelect'
import PokedexEntry from '../components/PokedexEntry'

const PokedexBox = () => {

    const [allPokemon, setAllPokemon] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        .then(response => response.json())
        .then((data) => {
            const promises = data.results.map((pokemon) => {
                return fetch(`${pokemon.url}`).then(response => response.json())
            })
        
        Promise.all(promises).then(results => {setAllPokemon(results)})
        })   
    }

    useEffect(() => {
        getPokemon()
    }, [])

    const onPokemonSelected = (pokemon) => {
        setSelectedPokemon(pokemon)
    }

    return(
        <>
        <h1>Pokedex</h1>
        <PokedexSelect allPokemon={allPokemon} pokemonSelected={onPokemonSelected}/>
        {selectedPokemon ? <PokedexEntry selectedPokemon={selectedPokemon}/> : null}
        </>
    )
}

export default PokedexBox