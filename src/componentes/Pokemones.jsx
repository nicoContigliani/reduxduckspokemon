import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion } from '../redux/PokeDucks';


const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.array
    )


    return (
        <div>
            Lista de pokemons
            <button onClick={() => { dispatch(obtenerPokemonesAccion()) }}>
                Get Pokemons
            </button>

            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>


        </div>
    )
}

export default Pokemones
