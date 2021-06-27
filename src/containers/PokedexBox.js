import {useState, useEffect} from 'react'
import PokedexList from '../components/PokedexList'
import PokedexEntry from '../components/PokedexEntry'
import logo from '../images/Pokemon_logo.png'

const PokedexBox = () => {

    const [allPokemon, setAllPokemon] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState({})

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
        <header>
            <img src={logo} alt="Pokemon logo" id='logo'/>
        </header>
        <main>
            <div id='pokedex-wrapper'>
                <PokedexList allPokemon={allPokemon} pokemonSelected={onPokemonSelected}/>
                {Object.keys(selectedPokemon).length ? <PokedexEntry selectedPokemon={selectedPokemon}/> : null}
            </div>
        </main>
        </>
    )
}

export default PokedexBox