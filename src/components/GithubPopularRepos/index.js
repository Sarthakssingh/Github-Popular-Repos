import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    repos: {},
    language: languageFiltersData[0].id,
    isLoading: true,
  }

  componentDidMount() {
    this.getRepos()
  }

  getRepos = async () => {
    this.setState({isLoading: true})
    const {language} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${language}`
    // const options = {
    //   method: 'GET',
    // }
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      const popularRepos = fetchedData.popular_repos.map(item => ({
        name: item.name,
        id: item.id,
        issuesCount: item.issues_count,
        forksCount: item.forks_count,
        starsCount: item.stars_count,
        avatarUrl: item.avatar_url,
      }))
      this.setState({repos: popularRepos, isLoading: false})
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader color="#0284c7" height={80} type="ThreeDots" width={80} />
    </div>
  )

  changeLanguage = id => this.setState({language: id}, this.getRepos)

  renderLanguageFiltersList = () => {
    const {language} = this.state

    return (
      <ul className="filters-list-container">
        {languageFiltersData.map(eachItem => (
          <LanguageFilterItem
            key={eachItem.id}
            id={eachItem.id}
            language={eachItem.language}
            changeLanguage={this.changeLanguage}
            isSelected={eachItem.id === language}
          />
        ))}
      </ul>
    )
  }

  renderRepositoriesList = () => {
    const {repos} = this.state
    return (
      <ul className="repositories-cards-list-container">
        {repos.map(repositoryData => (
          <RepositoryItem
            key={repositoryData.id}
            repositoryData={repositoryData}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="github-popular-repositories-container">
          <h1 className="heading">Popular</h1>
          {this.renderLanguageFiltersList()}
          {isLoading ? this.renderLoader() : this.renderRepositoriesList()}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
