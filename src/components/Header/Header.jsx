import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header({ handleClick, handleSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleTitleClick() {
    handleClick();
    setQuery("");
  }

  return (
    <header>
      <div className="title">
        <Link onClick={handleTitleClick} to="/" >
          News Reader
        </Link>
      </div>
      <div class="search-bar">
        <input
          type="text"
          onChange={handleChange}
          value={query}
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
