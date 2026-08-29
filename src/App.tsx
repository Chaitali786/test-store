import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Mini Store</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div role="status">Items: {cart.length}</div>
      <div>
        <p>Smart Watch</p>
        <span>$100</span>
        <button onClick={() => setCart([...cart, "Smart Watch"])}>
          Add to Cart
        </button>
      </div>
      <div>
        <p>Wireless Headphones</p>
        <button onClick={() => setCart([...cart, "Wireless Headphones"])}>
          Add to Cart
        </button>
      </div>
      <div>
        <p>Running Shoes</p>
        <button onClick={() => setCart([...cart, "Running Shoes"])}>
          Add to Cart
        </button>
      </div>
      {cart.length > 0 ? (
        <div>
          <button onClick={() => setCart([])}>Remove</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}