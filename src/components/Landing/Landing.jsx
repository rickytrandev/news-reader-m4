import "./Landing.css";
import { Header } from "../Header/Header";
import { Article } from "../Article/Article";

export function Landing({ data }) {
  return (
    <>
      <Header />
      <main>
        <section className="articles">
        <Article data={data} />
        </section>
      </main>
    </>
  )
}