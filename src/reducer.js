import {CLEAR_CART,REMOVE,INCREASE,DECREASE,LOADING,DISPLAY_ITEM} from './Actions'
const Reducer = (state,action) =>{
if (action.type === CLEAR_CART) {
    return {...state , cart: new Map() }
}
if (action.type === REMOVE) {
    // return {...state, cart: new Map(state.cart)}
    const newitem = new Map(state.cart);
    newitem.delete(action.payload.id)
    return {...state,cart:newitem}
}
if (action.type === INCREASE) {
    // return {...state, cart: new Map(state.cart)}
    const newitem = new Map(state.cart);
    const itemId = action.payload.id;
    const items = newitem.get(itemId)

    const newcart = {...items,amount:items.amount + 1};
    newitem.set(itemId,newcart)
    return {...state,cart:newitem}
}
if (action.type === DECREASE) {
    // return {...state, cart: new Map(state.cart)}
    const newitem = new Map(state.cart);
    const itemId = action.payload.id;
    const items = newitem.get(itemId)
    // console.log(items);
    if (items.amount === 1) {
        newitem.delete(itemId)
        return {...state,cart:newitem}
    }

    const newcart = {...items,amount:items.amount - 1};
    newitem.set(itemId,newcart)
    return {...state,cart:newitem}
}

    return state  ;
}


export default Reducer