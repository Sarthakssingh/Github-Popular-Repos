// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {id, language, changeLanguage, isSelected} = props

  const btnClassName = isSelected
    ? 'language-btn selected-language-btn'
    : 'language-btn'

  const changeLanguageBtn = () => {
    changeLanguage(id)
  }
  return (
    <li className="language-container">
      <button
        value={id}
        type="button"
        className={btnClassName}
        onClick={changeLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
