import React from 'react'
import { useSelector } from 'react-redux';
import { getProducts } from '../data/products'
import { RootState } from '../store/store';
import Card from './Card';

export default function Products() {
    let products = getProducts();
    let newProducts = useSelector((state: RootState) => state.product)
    return (
      <div className='container'>
        <div className="row">
            {newProducts.map((product) => (
              <div className="col-lg-4 col-sm-12 col-md-6 mb-2" key={product.id}>
                <Card product={product} />
              </div>
            ))}
        </div>
      </div>
    )
}
