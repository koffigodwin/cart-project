import React ,{useContext , createContext, useReducer } from 'react'
import Reducer from './reducer';
import {CLEAR_CART,REMOVE,INCREASE,DECREASE} from './Actions'
import { detaits } from './Data';
import { GetTotals } from './total';

const Globalcontext = createContext();

const intialize = {
    loading: false,
    cart: new Map(detaits.map((item) =>[item.id,item]))
}

const Context = ({children}) => {
    // const [carte , setCarte] = useState([]);
    const [state,dispatch] = useReducer(Reducer,intialize);

    const {totalAmount,totalCost} = GetTotals(state.cart)

    const clearcart = ()=>{
        dispatch({ type: CLEAR_CART})
    }
    const removeitem = (id) =>{
      dispatch({type:REMOVE,payload: { id }})
      // console.log(id);
    
    }
    const increase = (id) =>{
      dispatch({type:INCREASE,payload: { id }})
      // console.log(id);
    
    }
    const decrease = (id) =>{
      dispatch({type:DECREASE,payload: { id }})
      // console.log(id);
    
    }
  return (
    <div>
        <Globalcontext.Provider value={{...state , clearcart,removeitem,
          increase,decrease ,totalAmount,totalCost }}>
           {children}
        </Globalcontext.Provider>
    </div>
  )

}

export default Context

export const GlobalValue = () => {
   return useContext(Globalcontext)
}
    
