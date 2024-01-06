import './index.css'
const BrowserItem = props => {
  
  const {historyList, searchDelete} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDelete = () => {
    searchDelete(id)
  }

  return (
    <li className="history-list-container">
      <div className="history-search-list">
        <p className="search-para"> {timeAccessed} </p>
        <img src={logoUrl} className="image" />
        <p className="search-title"> {title} </p>
        <p className="search-url"> {domainUrl} </p>
      </div>
      <button data-testid="delete" className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-image"
          alt=" delete"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}

export default BrowserItem
