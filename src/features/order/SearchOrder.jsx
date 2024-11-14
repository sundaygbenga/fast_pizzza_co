import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        placeholder="Search order #"
        onChange={(e) => setQuery(e.target.value)}
        className="focust:outline-none w-28 rounded-full bg-yellow-100 px-3 py-2 text-xs transition-all duration-300 placeholder:text-stone-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:px-4 sm:text-sm sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
