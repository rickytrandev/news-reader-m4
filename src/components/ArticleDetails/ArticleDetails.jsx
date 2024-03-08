import "./ArticleDetails.css";
import { useParams } from "react-router-dom";

export function ArticleDetails({ articles }) {
  const { id } = useParams();

const article = articles.find(article => article.id === parseInt(id))

  return (
    <>
      {article ? (
        <div className="article-main">
          <div className="img-container">
            <img src={article.urlToImage} alt="" />
          </div>
          <div className="article-details">
            <a className="title" href={article.url}>{article.title}</a>
            <p>{article.author}</p>
            <p>{article.publishedAt}</p>
            <p>{article.description}</p>
            <a href={article.url}>Read More</a>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}