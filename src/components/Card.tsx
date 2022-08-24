import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../store/features/cart/cartSlice';

interface CardProps {
    product: {
        id: number;
        name: string;
        detail: string;
        price: number;
        info: string;
        offer: string;
        image: string;
    };
}
export default function Card({ product }: CardProps) {
    const location = useLocation();
    const dispatch = useDispatch();

    // console.log(location)
  return (
    <div className="card p-3">
      <div className="card-body text-center">
        <h5 className="card-title fw-bold fs-2 text-success">{product.name}</h5>
        <p className=''><span className='fw-bold text-primary'>Desciption: </span> {product.detail}</p>
        <p className=''><span className='fw-bold'>Prize: </span> - $ {product.price}</p>
        <Link className='text-decoration-none' to={`${product.id}`}>Click to view the details of the product</Link>

        {location.pathname === "/products" && <button type="button" className="btn btn-secondary mt-3" onClick={() => {dispatch(addToCart(product))}}>Add to Cart</button>}

        {location.pathname === "/cart" && <button type="button" className="btn btn-secondary mt-3" onClick={() => {dispatch(removeFromCart(product.id))}}>Remove item from Cart</button>}
      </div>
    </div>
  )
}
