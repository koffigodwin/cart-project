import React from 'react'
import { GlobalValue } from './Context';
import {FaPlus , FaMinus} from 'react-icons/fa'
// import { detaits } from './Data';
import './index.css'

const Cart = () => {
    
      const {cart , clearcart,removeitem,increase,decrease , totalCost}
          = GlobalValue();
    //   setCarte(detaits)
    const carte = Array.from(cart.entries());

    if (carte.length === 0) {
        return (
          <div className='carte-container'>
    
              <h2 className='yourbag'>YOUR BAG</h2>
              <h4 className='empty-cart'>is currently empty</h4>
        
          </div>
        );
      };
    
  return (
    <div className='carte-container'>
        <h1 className='yourbag'>YOUR BAG</h1>
        {
            carte.map((item) =>{
                const [id,items] = item
                 const {title,price,img ,amount} = items;
                // console.log(carte)
                return(
                    <div className="items" key={id}>
                     <div className="sub-container">
                     <div className="image">
                        <img src={img} alt={title} />
                     </div>
                      <div className="prices">
                         <h5 className='title'>{title}</h5>
                         <h5 className='price'>${price}</h5>
                         <button className='remove-btn'onClick={() =>removeitem(id)}>remove</button>
                      </div>
                     </div>
                      <div className="btn-container">
                      <button className='btn' onClick={() =>increase(id)}><FaPlus /></button>
                      <p className='amount'>{amount}</p>
                      <button className='btn' onClick={() =>decrease(id)}><FaMinus /></button>
                      </div>
                    </div>
                );
            })
        }

        <div className='lines'><hr/></div>
        <div className="total-container">
            <p className='total'>check out</p>
            <p className='total-price'>${totalCost.toFixed(2)}</p>
        </div>
        <button className='clear-btn' onClick={clearcart}>Clear all</button>
    </div>
  )
}

export default Cart


// useEffect(() =>{
//     const Generate = async () =>{
//         const  values = await fetch(Url);
//         const data = values.json();
//          console.log(data);
//         setCarte(data);
//     };
//   Generate();
// },[])
// // console.log(carte);