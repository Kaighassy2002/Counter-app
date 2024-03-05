import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, increment, incrementByAmount, reset } from '../counterSlice'

function ComponetApp() {
  const [amount,setAmount]= useState(0)
  const distpatch = useDispatch()
  const count = useSelector(state=>state.counterReducer.count)
  const handleIncrementByAmount = ()=>{
    if(amount){
      distpatch(incrementByAmount(amount))
    }else{
      alert("Enter a valid Amount")
    }
  }
  return (
    <>
      <div>
          <div className="c border rounded  m-5 " style={{padding:'40px,60px'}} >
               <h1 style={{fontSize:'100px',color:'white',textAlign:'center', margin:"40px"}}>{count}</h1>
               <div className='d-flex justify-content-evenly m-3' >
                   <button onClick={()=>distpatch(decriment())} type="button" class="btn btn-warning">DECREMENT</button>
                   <button onClick={()=>distpatch(reset())} type="button" class="btn btn-danger">RESET</button>
                   <button onClick={()=>distpatch(increment())} type="button" class="btn btn-success">INCREMENT</button>
                 </div>
                 <div className='p-5 d-flex justify-content-center'>
                     <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control ms-5 me-5'placeholder='Increment Amount' />
                     <button onClick={handleIncrementByAmount} type="button " class="btn btn-primary">INCREMENT BY AMOUNT</button>
                 </div>
               </div>
      </div>
    </>
  )
}

export default ComponetApp
