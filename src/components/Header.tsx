export type HeaderProps = {
  itemCount: number;
};

export default function Header({ itemCount }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-red-600 px-8 py-5">
      <h1 className="text-3xl font-bold tracking-tight text-white">
        Mini Store
      </h1>
      <div
        role="status"
        className="rounded-full bg-[#2563eb] px-4 py-1 text-sm font-semibold text-white shadow-sm"
      >
        Items: {itemCount}
      </div>
    </header>
  );
}
