import React, { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { Product } from "../types/products";
import { products } from "./data/products";

export default function App() {
  const [cart,setCart] = useState<Product[]>([]);
  

  return (
    <div>
      <Header itemCount={cart.length} /> 
      <main className="space-y-6 p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                onAddToCart={() => setCart((prev) => [...prev, product])}
              />
            ))}
          </div>
        </main>     
    </div>
  );
}