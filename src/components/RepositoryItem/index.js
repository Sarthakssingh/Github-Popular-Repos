// Write your code here

import './index.css'

const Repository = props => {
  const {repositoryData} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = repositoryData
  return (
    <li className="repository-card-item-container">
      <img className="card-item-image" src={avatarUrl} alt={name} />
      <h1 className="card-item-name">{name}</h1>
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="stats-text">{starsCount} stars</p>
      </div>
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="stats-text">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="stats-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default Repository
