import React, { useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [cart] = useState<string[]>([]);
  

  return (
    <div>
      <Header itemCount={cart.length} />      
    </div>
  );
}