import React from 'react'
import { FaCartPlus} from 'react-icons/fa'
import './index.css'
import { GlobalValue } from './Context'


const Usereducer = () => {
    const {totalAmount} = GlobalValue()
  return (
    <nav>
      <div className='reducer-container'>
       <div className="logo">
         <h3>Reducer</h3>
       </div>
       <div className="reducercart">
       <p className='number'>{totalAmount}</p>
           <p className='shopping'><FaCartPlus/></p>
           {/* <label className='numbers'>4</label> */}
       </div>
    </div>
    </nav>
  )
}

export default Usereducer