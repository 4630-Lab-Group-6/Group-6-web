import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Payment from "./Payment/Payment";

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
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/">Home</Link>
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
            {/* NEW NAV ITEMS */}
            <li>
              <Link to="/catalog" onClick={closeMenu}>Catalog</Link>
            </li>
            <li>
              <Link to="/payment" onClick={closeMenu}>Payment</Link>
            </li>
            <li>
              <Link to="/orders" onClick={closeMenu}>Orders</Link>
            </li>
          </ul>
        </aside>

        {/* MAIN CONTENT + ROUTES */}
        <main className="main">
          <div className="content">

            <Routes>
              <Route path="/" element={<Products />} />

              <Route path="/orders" element={<Orders />} />

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