import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './routes/users';
import User from './routes/user';

// import bootstrap from 'bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
// import "../src/styles.scss";

import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';
import ProductsPage from './routes/products';
import ProductDetail from './routes/product-detail';
import Home from './routes/home';
import About from './routes/about';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './routes/counter';
import Cart from './routes/cart';
import Reservation from './routes/reservation';
import Todos from './routes/todos';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='home' element={<Home />}></Route>
            <Route path='reservation' element={<Reservation />}></Route>
            <Route path='counter' element={<Counter />}></Route>
            <Route path='todos' element={<Todos />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='products' element={<ProductsPage />}></Route>
            <Route path='products/:productId' element={<ProductDetail />}></Route>
            <Route path='*' element={<main className='text-center'><h3>No matched route found</h3></main>}></Route>
          </Route>

          {/* <Route path='/' element={<App />}>
            <Route path='users' element={<Users />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an user</p>
                </main>
              }
            />
              <Route path=':userId' element={<User />}></Route>
            </Route>
          </Route> */}

        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
