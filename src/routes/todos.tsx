import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store/features/todoSlice';
import { RootState } from '../store/store';

export default function Todos() {
    const [enteredName, setEnteredName] = useState("");
    const dispatch = useDispatch();

    const todoItems = useSelector((state: RootState) => state.todos.names);

    const addHandler = () => {
        if(enteredName === "") return;
        dispatch(addTodo(enteredName));
        setEnteredName("");
    }
    const itemClickHanlder = (e: React.MouseEvent<HTMLElement>, index: number) => {
        dispatch(deleteTodo(index))
    }

  return (
    <div className='container'>
        <h2 className="fw-bold text-primary text-center">
            Todos
        </h2>

        <div className="row">
            <div className="col">
                <div className="mb-3 border border-success border-3">
                  <label htmlFor="name" className="form-label mt-3">Enter Todo Item:</label>
                  <input type="text" value={enteredName} onChange={(e) => setEnteredName(e.target.value)} className="form-control mt-3 mb-3" id="name" placeholder="Enter todo item" />
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary" onClick={addHandler}>Add</button>
                </div>
                <div>
                    <h5 className='text-success fw-bold'>Todo items: {todoItems.length === 0 && <p className='mt-2 text-success'>No items in todo list!!!</p>}</h5>
                    {todoItems.map((name, index) => {
                        return <div className='fw-bold m-2 border border-2 border-primary p-2' key={index} onClick={(e) => itemClickHanlder(e, index)}>{name}</div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
