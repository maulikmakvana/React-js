import React from "react";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search News..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
