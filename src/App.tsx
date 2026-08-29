import React, { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { Product } from "../types/products";
import { products } from "./data/products";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [cart,setCart] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header itemCount={cart.length} /> 
      <main className="space-y-6 p-6">
        <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
        </main>     
    </div>
  );
}