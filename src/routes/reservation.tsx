import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomer } from '../store/features/customerSlice';
import { addReservation, removeReservation } from '../store/features/reservationSlice';
import { RootState } from '../store/store'

export default function Reservation() {
    const [enteredName, setEnteredName] = useState("");
    const dispatch = useDispatch();
    const [id, setId] = useState(0)
    

    const reservationNames = useSelector((state: RootState) => state.reservation.names);
    const customers = useSelector((state: RootState) => state.customer.names)


    const addHandler = () => {
        if(enteredName === "") return;
        dispatch(addReservation(enteredName));
        setEnteredName("");
    }
    const itemClickHanlder = (e: React.MouseEvent<HTMLElement>, index: number) => {
        dispatch(removeReservation(index));
        setId(id+1);
        dispatch(addCustomer({ id: id, name: e.currentTarget.innerText, orders: []  }))
    }
  return (
    <div className='container'>
        <h4 className="fw-bold">
            Reservation
        </h4>

        <div className="row">
            <div className="col border border-success p-3">
                <div className="mb-3 border border-success border-3">
                  <label htmlFor="name" className="form-label mt-3">Enter Name:</label>
                  <input type="text" value={enteredName} onChange={(e) => setEnteredName(e.target.value)} className="form-control mt-3 mb-3" id="name" placeholder="Ex: Bob" />
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-primary" onClick={addHandler}>Add</button>
                </div>
                <div>
                    <h5 className='ms-2'>Reserved Customer Names: {reservationNames.length === 0 && <p>Yet to be reserved!!!</p>}</h5>
                    <h5 className='ms-2'> {reservationNames.length > 0 && <p>Click the below items to move right side!!!</p>}</h5>
                    {reservationNames.map((name, index) => {
                        return <div className='fw-bold m-2 border border-2 border-primary p-2' key={index} onClick={(e) => itemClickHanlder(e, index)}>{name}</div>
                    })}
                </div>
            </div>
            <div className="col border border-success p-3">
                <h4>Customers</h4>
                {customers.map((name: any, index) => {
                    return <div className='fw-bold m-2 border border-2 border-primary p-2' key={index} onClick={(e) => itemClickHanlder(e, index)}>{name["name"]}</div>
                })}
            </div>
        </div>
    </div>
  )
}
// function e(e: any, index: number): React.MouseEventHandler<HTMLDivElement> | undefined {
//     throw new Error('Function not implemented.');
// }

