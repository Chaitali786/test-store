export type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  onAddToCart: () => void;
};

export default function ProductCard({
  name,
  price,
  image,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4 h-44 w-full overflow-hidden rounded-lg bg-gray-50">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <h3 className="text-base font-bold text-gray-800">{name}</h3>
      <span className="my-1 text-lg font-extrabold text-[#2563eb]">
        {price}
      </span>
      <button
        type="button"
        onClick={onAddToCart}
        className="mt-2 w-full rounded-lg bg-[#2563eb] py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
      >
        Add to Cart
      </button>
    </div>
  );
}
