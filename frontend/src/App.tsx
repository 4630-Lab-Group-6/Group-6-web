import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">

        {/* HEADER */}
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Group 6</Link>
          </div>

          <div className="header-links">
            <Link to="/orders">Orders</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <h3>Shopping Categories</h3>

          <button
            className="sidebar-close-button"
            onClick={closeMenu}
          >
            x
          </button>

          <ul>
            <li><Link to="/">Pants</Link></li>
            <li><Link to="/">Shirts</Link></li>
          </ul>
        </aside>

        {/* MAIN CONTENT + ROUTES */}
        <main className="main">
          <div className="content">

            <Routes>

              {/* HOME PAGE (PRODUCT LIST) */}
              <Route
                path="/"
                element={
                  <ul className="products">

                    <li>
                      <div className="product">
                        <img
                          className="product-image"
                          src="/images/d1.jpg"
                          alt="product"
                        />
                        <div className="product-name">
                          <Link to="/product">Slim Shirt</Link>
                        </div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">
                          4.5 Stars (10 Reviews)
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="product">
                        <img
                          className="product-image"
                          src="/images/d1.jpg"
                          alt="product"
                        />
                        <div className="product-name">
                          <Link to="/product">Slim Shirt</Link>
                        </div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">
                          4.5 Stars (10 Reviews)
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="product">
                        <img
                          className="product-image"
                          src="/images/d1.jpg"
                          alt="product"
                        />
                        <div className="product-name">
                          <Link to="/product">Slim Shirt</Link>
                        </div>
                        <div className="product-brand">Nike</div>
                        <div className="product-price">$60</div>
                        <div className="product-rating">
                          4.5 Stars (10 Reviews)
                        </div>
                      </div>
                    </li>

                  </ul>
                }
              />

              {/* ORDERS PAGE */}
              <Route path="/orders" element={<Orders />} />

              {/* ORDER DETAIL */}
              <Route path="/order/:id" element={<OrderDetail />} />

            </Routes>

          </div>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          &copy; 2022 Group 6
        </footer>

      </div>
    </Router>
  );
}

export default App;