import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'







function Counter() {
   
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counterSlice.count)
    const [amount, setAmount] = useState(0)
    const handleIncrement = ()=>{
        if(amount>0){
            dispatch(incrementByAmount(+amount))
            setAmount("")
        }else{
            alert("Enter Valid Amount")
        }
    }
   
  return (
    <div>
        <div className='' style={{border:'1px solid black', width:'500px', height:'300px', backgroundColor:'lightblue'}}>
            <h1>{count}</h1>
            <div className='d-flex px-auto'>
                <div onClick={()=>dispatch(increment())} style={{border:'1px solid black',width:'120px'}}>
                    <h5>Increment</h5>
                </div>
                <div onClick={()=>dispatch(decrement())} style={{border:'1px solid black',width:'120px'}}>
                    <h5>Decrement</h5>
                </div>
                <div onClick={()=>dispatch(reset())} style={{border:'1px solid black',width:'120px'}}>
                    <h5>Reset</h5>
                </div>
            </div>
            <div className='d-flex px-auto'>
                <div >
                    <input onChange={e=>setAmount(e.target.value)} value={amount||""} type="text" name="" id="" />
                </div>
                <div onClick={handleIncrement} style={{border:'1px solid black',width:'120px'}}>
                    <h5>Increment by Amount</h5>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Counter