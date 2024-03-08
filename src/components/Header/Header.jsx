import './Header.css'

export function Header() {
  return (
    <>
      <div className="title">
        <h1>News Reader</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder='Search for topics..'/>
      </div>
    </>
  )
}