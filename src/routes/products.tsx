import React from 'react'
import Products from '../components/Products'

export default function ProductsPage() {
  return (
    <div className='container'>
        <h3 className='fw-bold ms-3'>List of products</h3>
        <Products />
    </div>
  )
}
