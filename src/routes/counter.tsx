import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incremenet, incrementByValue } from '../store/features/counter/counterSlice';
import { RootState } from '../store/store'

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch()

  return (
    <div className='container'>
        <h3 className='text-center'>Counter page</h3>
        <p className="fw-bold text-warning fs-3 m-3">Counter value: {count}</p>
        <button type="button" className="btn btn-primary m-3" onClick={()=> { dispatch(incremenet())}}>Increment</button>
        <button type="button" className="btn btn-secondary m-3" onClick={()=> { dispatch(decrement())}}>Decrement</button>
        <button type="button" className="btn btn-success m-3" onClick={()=> { dispatch(incrementByValue(5))}}>Increment by Value 5</button>
    </div>
  )
}
