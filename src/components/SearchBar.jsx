function SearchBar({ search, onSearchChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={onSearchChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
}

export default SearchBar;