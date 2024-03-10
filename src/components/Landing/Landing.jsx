import "./Landing.css";
import { Header } from "../Header/Header";
import { Article } from "../Article/Article";

export function Landing({ searchResults, data, error }) {
  return (
    <>
      <h1 className="trending">{searchResults.length ? `Results` : `Trending`}</h1>
      <main>
        {error && <h2>{error}</h2>}
        <section className="articles">
          <Article data={data} />
        </section>
      </main>
    </>
  );
}
