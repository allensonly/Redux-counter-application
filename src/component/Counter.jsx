import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterSlice'

function Counter() {

  // state to hold value for input box
  const[range,setRange] = useState("")
  console.log(range);



  //hook to dispatch a function in action
const dispatch = useDispatch()

//component can acess the state by using useSelector hook 

const count = useSelector((state) =>state.counter.value)

  return (
    <>
    
    <div>


      <div className=' d-flex justify-content-center align-items-center flex-column w-100  '>

        <h1 className='mt-5 mb-4 fs-1'>{count}</h1>

      

      <div   className='d-flex m-3 '>


      <button type="button" onClick={ () =>dispatch(decrement(Number(range)))} className='m-2 bg-success border-4 rounded fs-4 p-1' >Decrement</button>
      <button type="button" onClick={ () =>  dispatch(reset())}  className='m-2 bg-danger border-4 rounded fs-4 p-1'  >Reset</button>

      <button type="button" onClick={ () => dispatch(increment((Number(range))))} className='m-2  bg-warning border-4 rounded fs-4 p-1' >Increment</button>

      </div>

      </div>


    </div>

    <div>
      {/* input box */}

    <input type="text" onChange={(e) => setRange(e.target.value)}  className='form-control w-100 mt-3' placeholder='enter the range'/>

    </div>
    
    
    </>
  )
}

export default Counter