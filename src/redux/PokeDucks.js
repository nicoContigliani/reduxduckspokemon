import axios from 'axios';
//constantes  estados
const dataInicial = {
    array: [],
    offset: 0,
    limit: 30

}

//types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'



//reducer
export default function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:

            return { ...state, array: action.payload };

        default:
            return state;
    }
}

//acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
    // console.log('getState', getState().pokemones.offset)
    const offset = getState().pokemones.offset
    const limit = getState().pokemones.limit

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

