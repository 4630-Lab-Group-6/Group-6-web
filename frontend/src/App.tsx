import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";

function App() {
  return (
    <Router>
      <div className="App">

        {/* Navigation Menu */}
        <div style={{ padding: "10px", display: "flex", gap: "15px" }}>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            }
          />

          {/* Orders Page */}
          <Route path="/orders" element={<Orders />} />

          {/* Order Detail Page */}
          <Route path="/order/:id" element={<OrderDetail />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;