import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing } from '../Landing/Landing.jsx'
import './App.css'
import { data } from '../../data.js'
import { ArticleDetails } from '../ArticleDetails/ArticleDetails.jsx'

export function App() {
  const [trendingArticles, setTrendingArticles] = useState([])


  useEffect(() => {
      const cleanedArticles = data.articles.map((article, index) => {
        return {...article, id: index}
      })
      setTrendingArticles(cleanedArticles)
    }, [data.articles])
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing data={trendingArticles} />} />
        <Route path="/article/:id" element={<ArticleDetails articles={trendingArticles} />} />
      </Routes>
    </>
  )
}
