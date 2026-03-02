import React from "react";
import { Link } from "react-router-dom";

type Product = {
  _id: number;
  name: string;
  image: string;
  brand: string;
  price: number;
  rating: number;
  numReviews: number;
};

const products: Product[] = [
  {
    _id: 1,
    name: "Slim Shirt",
    image: "/images/d1.jpg",
    brand: "Nike",
    price: 60,
    rating: 4.5,
    numReviews: 10,
  },
  {
    _id: 2,
    name: "Fit Shirt",
    image: "/images/d1.jpg",
    brand: "Adidas",
    price: 55,
    rating: 4.2,
    numReviews: 8,
  },
  {
    _id: 3,
    name: "Best Pants",
    image: "/images/d1.jpg",
    brand: "Puma",
    price: 75,
    rating: 4.8,
    numReviews: 15,
  },
];

export default function Catalog() {
  return (
    <div className="content">
      <h2>Catalog</h2>

      <ul className="products">
        {products.map((p) => (
          <li key={p._id}>
            <div className="product">
              <img className="product-image" src={p.image} alt={p.name} />
              <div className="product-name">
                <Link to={`/catalog`}>{p.name}</Link>
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
