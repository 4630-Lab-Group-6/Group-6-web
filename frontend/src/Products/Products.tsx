import React, { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  numReviews: number;
  image: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:5104/catalog", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <img className="product-image" src={product.image} alt="product" />
            <div className="product-name">{product.name}</div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;