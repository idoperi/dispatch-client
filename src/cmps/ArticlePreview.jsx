import { Link } from "react-router-dom"
import moment from "moment"
import arrow from "../assets/icons/arrow.svg"

export function ArticlePreview({ article }) {
  function getDate() {
    return moment(article.publishedAt).format("dddd MMM D, YYYY")
  }

  return (
    <li className="article-preview">
      <img className="img" src={article.urlToImage} alt="" />

      <div className="info-container">
        <p className="date">{getDate()}</p>
        <h2 className="title">{article.title}</h2>
        <p className="source-name">{article.source.name}</p>
        <p className="content">{article.content}</p>
        <Link className="link-dispatch" to={article.url}>
          <button className="btn-primary btn-dispatch">
            <span>navigate to dispatch</span>
            <img src={arrow} alt="" />
          </button>
        </Link>
      </div>

      {/* <pre>{JSON.stringify(article, null, 2)}</pre> */}
    </li>
  )
}
