import { useReducer, useEffect } from 'react';

import reducer from '../reducers/reducer';

const useAPI = () => {

const INIT_STATE = {

products: [],

isAPILoaded: false,

cart: [],

totalAmount: 0,

Headphones: [],

Earphones: [],

Speakers: [],

Dress:[]

}

const [state, dispatch] = useReducer(reducer, INIT_STATE);

const { products, totalAmount, cart, Headphones, Earphones, Speakers,Dress,} = state;

useEffect((prevState) => {

fetch('https://jsonblob.com/api/cd94022d-b9cb-11ea-9f6b-4f56bd3fcd65').

then(response => response.json()).

then(json => {

dispatch({

type: 'API_SUCCESS',

payload: { products: [...json], isAPILoaded: true }

}) 

})

}, []);

useEffect((prevState) => {

dispatch({ type: 'TOTAL_AMOUNT' })

}, [cart]);

const incrementCounter = (index) => {

dispatch({

type: 'INCREMENT_COUNTER',

payload: { index }

}

)

}

const decrmentCounter = (index) => {

dispatch({

type: 'DECREMENT_COUNTER',

payload: { index }

}

)

}

const removeProduct = (index) => {

dispatch({

type: 'REMOVE_PRODUCT',

payload: { index }

})

}

const headphones = () => {

dispatch({

type: 'HEADPHONES',

})

}

const earphones = () => {

dispatch({

type: 'EARPHONES',

})

}

const speakers = () => {

dispatch({

type: 'SPEAKERS',

})

}

const dress = () => {

dispatch({

type: 'DRESS',

})

}

const reset = () => {

dispatch({

type: 'RESET'

})

}

const addHitem = (index) => {

dispatch({

type: 'ADD_H_ITEM',

payload: { index }

})

}

const addEitem = (index) => {

dispatch({

type: 'ADD_E_ITEM',

payload: { index }

})

}

const addSitem = (index) => {

dispatch({

type: 'ADD_S_ITEM',

payload: { index }

})

}

const addDitem = (index) => {

dispatch({

type: 'ADD_D_ITEM',

payload: { index }

})

}

return {

state,

incrementCounter,

decrmentCounter,

addHitem,

addEitem,

addSitem,

addDitem,

removeProduct,

headphones,

earphones,

speakers,

dress,

reset

}

}

export default useAPI;
