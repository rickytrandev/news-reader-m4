import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "../Landing/Landing.jsx";
import "./App.css";
import { data } from "../../data.js";
import { ArticleDetails } from "../ArticleDetails/ArticleDetails.jsx";
import { Header } from "../Header/Header.jsx";
import { mockSearch,mockTrendingRequest, getSearchResults } from "../../apiCalls";

export function App() {
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);


  function handleSearch(query) {
    getSearchResults(query)
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
          throw new Error(`Unable to fetch new articles status ${res.status}`)
        }
      setSearchResults(res.articles);
    });
  }

  // set initial trending articles
  useEffect(() => { 
    mockTrendingRequest().then((response) => {
      setTrendingArticles(response.articles);
      setDisplayedArticles(response.articles);
    });
  },[]);

  // if no search results, display trending articles
  useEffect(() => {
    setDisplayedArticles(searchResults.length ? searchResults : trendingArticles);
  },[searchResults]);

  // useEffect(() => {
  //   const cleanedArticles = data.articles.map((article, index) => {
  //     return { ...article, id: index };
  //   });
  //   setTrendingArticles(cleanedArticles);
  // }, [data.articles]);
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Landing data={displayedArticles} />} />
        <Route
          path="/article/:id"
          element={<ArticleDetails articles={displayedArticles} />}
        />
      </Routes>
    </>
  );
}
