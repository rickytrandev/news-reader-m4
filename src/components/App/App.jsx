import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "../Landing/Landing.jsx";
import "./App.css";
import { ArticleDetails } from "../ArticleDetails/ArticleDetails.jsx";
import { Header } from "../Header/Header.jsx";
import { getSearchResults, getTrending } from "../../apiCalls";

export function App() {
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [error, setError] = useState("");

  function handleSearch(query) {
    getSearchResults(query)
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
          throw new Error(`Unable to fetch new articles status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const cleanedArticles = data.articles.map((article, index) => {
          return { ...article, id: index };
        });
        setSearchResults(cleanedArticles);
      })
      .catch((error) => setError(error.message));
  }

  function handleClick() {
    setDisplayedArticles(trendingArticles);
    setSearchResults([]);
  }

  // set initial trending articles
  useEffect(() => {
    getTrending()
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
          throw new Error(`Unable to fetch new articles status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const cleanedArticles = data.articles.map((article, index) => {
          return { ...article, id: index };
        });
        setTrendingArticles(cleanedArticles);
        setDisplayedArticles(cleanedArticles);
      })
      .catch((error) => setError(error.message));
  }, []);

  // if no search results, display trending articles
  useEffect(() => {
    setDisplayedArticles(
      searchResults.length ? searchResults : trendingArticles
    );
  }, [searchResults]);

  return (
    <>
      <Header handleClick={handleClick} handleSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={<Landing searchResults={searchResults} data={displayedArticles} error={error} />}
        />
        <Route
          path="/article/:id"
          element={<ArticleDetails articles={displayedArticles} />}
        />
      </Routes>
    </>
  );
}
