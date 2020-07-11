const reducer = (state, action) => {

    const { type, payload } = action
    
    const { products, cart, Headphones,Earphones,Speakers,Dress } = state
    
    switch (type) {
    
    case 'API_SUCCESS': {
    
    return {
    
    ...state,
    
    ...payload
    
    }
    
    } case 'INCREMENT_COUNTER': {
    
    const { index } = payload
    
    cart[index].quantity++
    
    return {
    
    ...state,
    
    cart: [...cart]
    
    }
    
    }
    
    case 'DECREMENT_COUNTER': {
    
    const { index } = payload
    
    cart[index].quantity--
    
    return {
    
    ...state,
    
    cart: [...cart]
    
    }
    
    }
    
    case 'TOTAL_AMOUNT': {
    
    const totalCost = cart.map(product => parseFloat(product.price)
    
    * product.quantity)
    
    return {
    
    ...state,
    
    totalAmount: totalCost.reduce((acc, amount) => acc + amount, 0)
    
    }
    
    }
    
    case 'REMOVE_PRODUCT': {
    
    const { index } = payload
    
    const Id = cart[index].id
    
    products[Id - 1].incart = "false"
    
    cart.splice(index, 1)
    
    return {
    
    ...state,
    
    products: [...products],
    
    cart: [...cart]
    
    }
    
    }
    
    case 'HEADPHONES': {
    
    const Headphones = products.filter(product => product.category === "headphones")
    
    return {
    
    ...state,
    
    Headphones: [...Headphones]
    
    }
    
    }
    
    case 'EARPHONES': {
    
    const Earphones = products.filter(product => product.category == "earphones")
    
    return {
    
    ...state,
    
    Earphones: [...Earphones]
    
    }
    
    }
    
    case 'SPEAKERS': {
    
    const Speakers = products.filter(product => product.category == "speakers")
    
    return {
    
    ...state,
    
    Speakers: [...Speakers]
    
    }
    
    }
    
    case 'DRESS': {
    
    const Dress = products.filter(product => product.category == "dress")
    
    return {
    
    ...state,
    
    Dress: [...Dress]
    
    }
    
    }
    
    case 'RESET': {
    
    for (var i = 0; i < products.length; i++)
    
    {
    
    products[i].incart = "false"
    
    }
    
    return {
    
    ...state,
    
    products: [...products],
    
    cart: []
    
    }
    
    }
    
    case 'ADD_H_ITEM': {
    
    const { index } = payload
    
    Headphones[index].incart = "true"
    
    return {
    
    ...state,
    
    Headphones: [...Headphones],
    
    cart: [...cart, Headphones[index]],
    
    }
    
    }
    
    case 'ADD_E_ITEM': {
    
    const { index } = payload
    
    Earphones[index].incart = "true"
    
    return {
    
    ...state,
    
    Earphones: [...Earphones],
    
    cart: [...cart, Earphones[index]],
    
    }
    
    }
    
    case 'ADD_S_ITEM': {
    
    const { index } = payload
    
    Speakers[index].incart = "true"
    
    return {
    
    ...state,
    
    Speakers: [...Speakers],
    
    cart: [...cart, Speakers[index]]
    
    }
    
    }
    
    case 'ADD_D_ITEM': {
    
    const { index } = payload
    
    Dress[index].incart = "true"
    
    return {
    
    ...state,
    
    Dress: [...Dress],
    
    cart: [...cart, Dress[index]]
    
    }
    
    }
    
    default: {
    
    return state
    
    }
    
    }
    
    }
    
    export default reducer;
