import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion } from '../redux/PokeDucks';


const Pokemones = () => {
    const dispatch = useDispatch()
    return (
        <div>
            Lista de pokemons
            <button onClick={() => { dispatch(obtenerPokemonesAccion()) }}>
                Get Pokemons
            </button>
        </div>
    )
}

export default Pokemones
