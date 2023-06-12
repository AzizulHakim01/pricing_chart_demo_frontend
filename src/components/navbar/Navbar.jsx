import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Navbar.scss"
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Navbar = () => {
    const [menuDown, setMenuDown] = useState(true)
    const [menu2Down, setMenu2Down] = useState(true)
  return (
    <>
        <div className="navbar">
            <div className="logo">
                <img src="/booking_logo.png" alt="Logo" />
            </div>
            <div className="menu">
                <ul>
                    <li onClick={()=>setMenuDown(!menuDown)}>Product <FontAwesomeIcon icon={menuDown?faArrowDown:faArrowUp} style={{color: "#212121",}} /></li>
                    <li onClick={()=>setMenu2Down(!menu2Down)}>Templates <FontAwesomeIcon icon={menu2Down?faArrowDown:faArrowUp} style={{color: "#212121",}} /></li>
                    <li>Pricing</li>
                    <li>Reviews</li>
                </ul>
            </div>
            <div className="login-register">
                {/* Will convert them to link when necessery */}
                <p className='log__in__button_header'>LOG IN</p>
                <p className='start__button__header'>START FREE</p>
            </div>
        </div>
    </>
  )
}

export default Navbar