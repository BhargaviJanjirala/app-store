// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  const onClickTabItem = () => {
    clickTabItem(tabDetails.tabId)
  }
  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}
export default TabItem
