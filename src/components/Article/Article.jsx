import "./Article.css";
import { Link } from "react-router-dom";

export function Article({ data }) {
  return (
    <>
      {data ? (
        data.map((article) => {
          return (
            <article id={article.id} key={article.id}>
              <div className="article-details">
                <Link to={`/article/${article.id}`}> 
                  {article.title}
                </Link>
                <p>{article.author}</p>
                <p>{article.publishedAt}</p>
              </div>
              <div className="img-container">
                <img src={article.urlToImage} alt="" />
              </div>
            </article>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
