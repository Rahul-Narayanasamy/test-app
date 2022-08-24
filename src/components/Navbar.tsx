import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export default function Navbar() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <header>
      <nav className="container-fluid navbar navbar-expand-lg navbar-light" style={{ backgroundColor:"#e3f2fd"}}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand text-primary fw-bold" to="#">Example App</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todos">Todos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservation">Reservation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">Counter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
          </ul>
          <form className="d-flex">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button> */}
            <Link className="btn btn-outline-success" to="/cart" aria-disabled="true">Cart <span className="badge bg-secondary ms-1">{cart.length}</span></Link>
          </form>
        </div>
      </div>
    </nav>
    </header>
  )
}
