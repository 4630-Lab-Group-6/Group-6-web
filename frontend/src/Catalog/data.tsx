export type CatalogProduct = {
  _id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
};

export const catalogData: { products: CatalogProduct[] } = {
  products: [
    {
      _id: 1,
      name: "Slim Shirt",
      category: "Shirts",
      image: "/images/d1.jpg",
      price: 60,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
    },
    {
      _id: 2,
      name: "Fit Shirt",
      category: "Shirts",
      image: "/images/d1.jpg",
      price: 50,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 12,
    },
    {
      _id: 3,
      name: "Slim Pant",
      category: "Pants",
      image: "/images/d1.jpg",
      price: 70,
      brand: "Zara",
      rating: 4.8,
      numReviews: 8,
    },
  ],
};