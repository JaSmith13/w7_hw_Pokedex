import {useState, useEffect} from 'react'
import PokedexSelect from '../components/PokedexSelect'

const PokedexBox = () => {

    const [allPokemon, setAllPokemon] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState({})

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        .then(response => response.json())
        .then(data => setAllPokemon(data.results))
    }

    return(
        <>
        <h1>Pokedex</h1>
        <PokedexSelect allPokemon={allPokemon}/>
        </>
    )
}

export default PokedexBox