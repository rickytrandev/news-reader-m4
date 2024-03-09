import "./Header.css";

import { useState } from "react";

export function Header({ handleSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <header>
      <div className="title">
        <h1>News Reader</h1>
      </div>
      <div class="search-bar">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search topics..."
        />
        <button onClick={() => handleSearch(query)} class="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </header>
  );
}
