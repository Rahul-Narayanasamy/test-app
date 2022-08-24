import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { RootState } from '../store/store'

export default function Cart() {
    const cart = useSelector((state: RootState) => state.cart.cart)
    const q = useSelector((state: RootState) => state.cart.quantity)

    console.log(cart)
    console.log(q)
  return (
    <div className='container'>
        <h2 className='fw-bold '>Cart Page</h2>
        <div className="row">
            {cart.length === 0 && <p className='fw-bold fs-4'>No items found</p>}
            {cart.length === 0 && <Link to="/products" className='fw-bold fs-4'>Go back to Products page for Adding!!!</Link>}
            {cart.map((product) => (
              <div className="col-lg-4 col-sm-12 col-md-6 mb-2" key={product.id}>
                <Card product={product} />
              </div>
            ))}
        </div>
    </div>
  )
}
