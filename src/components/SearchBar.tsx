export type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

export default function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      role="textbox"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      onInput={(e) => onSearchChange((e.target as HTMLInputElement).value)}
      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-blue-500"
    />
  );
}
