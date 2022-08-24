import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../data/products';

interface Product {
    id: number;
    name: string;
    detail: string;
    price: string;
    hero: string | undefined;
    image: string;
}

export default function ProductDetail() {
    const param = useParams();
    let product: Product | undefined = getProduct(parseInt(param?.productId!));

    return (
      <div className='container'>
        <h2 className='fw-bold ms-3'>Product Details about {param.productId}</h2>
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6 mb-2">
                <div className="card p-3">
                    <div className="card-body">
                      <h5 className="card-title fs-3 fw-bolder text-success">{product?.name}</h5>
                      <h6 className="card-subtitle mb-2 text-success">{product?.detail}</h6>
                      {/* <img src={product.image} alt="image" /> */}
                      <p className="card-text"><span className='fw-bold'>Description: </span>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <p><span className='fw-bold'>Prize</span> - $ {product?.price}</p>
                    </div>
                    <Link className='text-decoration-none text-center' to="/products">Back to products page</Link>
                </div>
            </div>
        </div>
      </div>
    )
}
