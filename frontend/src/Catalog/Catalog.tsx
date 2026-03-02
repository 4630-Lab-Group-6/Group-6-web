import React from "react";
import { Link } from "react-router-dom";
import { catalogData } from "./data";

function Catalog() {
  return (
    <div className="content">
      <ul className="products">
        {catalogData.products.map((p) => (
          <li key={p._id}>
            <div className="product">
              <Link to={`/product/${p._id}`}>
                <img className="product-image" src={p.image} alt={p.name} />
              </Link>

              <div className="product-name">
                <Link to={`/product/${p._id}`}>{p.name}</Link>
              </div>

              <div className="product-brand">{p.brand}</div>
              <div className="product-price">${p.price}</div>

              <div className="product-rating">
                {p.rating} Stars ({p.numReviews} Reviews)
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;