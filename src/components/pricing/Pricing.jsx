import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Pricing.scss"
import PricingChart from '../pricing_chart/PricingChart'
import { useState } from 'react'

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false)
  return (
    <div className='pricing'>
      <div className="heading">
        <h3>Plans & Pricing</h3>
        <div className="toggle__button">
          <p onClick={()=>setIsMonthly(true)}>MONTHLY</p>
          <span onClick={()=>setIsMonthly(!isMonthly)}>{isMonthly ? <FontAwesomeIcon icon={faToggleOff} color="#00B289" className='fa-lg'/>:<FontAwesomeIcon icon={faToggleOn} color="#00B289" className='fa-lg'/>}</span>
          <p onClick={()=>setIsMonthly(false)}>YEARLY</p>
        </div>
      </div>
      <div className="charts">
        <div className="chart">
            <PricingChart title={"WORKFLOW"} price={19}/>
            <PricingChart title={"WORKFLOW"} price={19}/>
        </div>
      </div>
    </div>
  )
}

export default Pricing