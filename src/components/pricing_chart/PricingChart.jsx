import Chart_item from "../pricing_chart_item/Chart_item"
import "./PricingChart.scss"

const PricingChart = ({title, price, item}) => {
  return (
    <div className='pricing_chart'>
        <h4>{title}</h4>
        <p><sup>$</sup><small>{price}</small><span>/MONTH</span></p>
        <hr />
        <div className="chart_items">
            <Chart_item text={"Unlimited Clients & Projects"}/>
            <Chart_item text={"Proposals"}/>
            <Chart_item text={"Contracts"}/>
            <Chart_item text={"Invoicing & Payments"}/>
            <Chart_item text={"Client CRM"}/>
            <Chart_item text={"Project Management"}/>
            <Chart_item text={"Task & Time Tracking"}/>
            <Chart_item text={"iOS, Android, CHome & Mac Apps"}/>
        </div>
        <button>START FREE</button>
    </div>
  )
}

export default PricingChart