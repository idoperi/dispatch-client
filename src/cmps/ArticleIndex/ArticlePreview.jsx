import { Link } from "react-router-dom"
import moment from "moment"
import arrow from "../../assets/icons/arrow.svg"
import { Button } from "../../assets/style/cmps/Button.styled"

export const ArticlePreview = ({ article }) => {
  const getDate = () => {
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
          <Button $primary>
            <span>navigate to dispatch</span>
            <img src={arrow} alt="" />
          </Button>
        </Link>
      </div>
    </li>
  )
}
