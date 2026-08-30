import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";

import { products } from "./data/products";
import { Product } from "../types/products";
export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-200 p-6 font-sans">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-slate-50 shadow-lg">
        <Header itemCount={cart.length} />
        <main className="p-6">
          <div className="mb-6">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            
            onAddToCart={() => setCart((prev) => [...prev, product])}
          />
            ))}
          </div>
          <ShoppingCart items={cart} onRemove={() => setCart([])} />
        </main>
      </div>
    </div>
  );
}