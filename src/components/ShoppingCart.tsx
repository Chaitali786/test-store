import { Product } from "../../types/products";
export type ShoppingCartProps = {
  items: Product[];
  onRemove: () => void;
}

export default function ShoppingCart({ items, onRemove }: ShoppingCartProps) {
  return (
    <section className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-center text-lg font-semibold ">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-center text-sm ">Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((item, index) => (
            <div className="flex items-center justify-between" key={`${item.id}-${index}`}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))
          }
          
          <button 
          type="button" 
          onClick={onRemove}
          className="w-16 rounded-md bg-[#ef4444] px-1.5 py-1 text-sm font-bold justify-center text-white transition hover:bg-red-600">
          Remove
          </button>
        </div>
      )}
    </section>
  );
}