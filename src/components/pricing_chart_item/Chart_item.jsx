import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Chart_item.scss"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const Chart_item = ({text}) => {
  return (
    <p className='chart_item'><FontAwesomeIcon icon={faCheck} color="#049B78"/> {text}</p>
  )
}

export default Chart_item