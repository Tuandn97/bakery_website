import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const Navbar = () => {
    const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=> setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=> setMenu("menu")} className={menu === "menu"?"active":""}>Menu</li>
            <li onClick={()=> setMenu("services")} className={menu === "services"?"active":""}>Services</li>
        </ul>
        <div className="navbar-right">
            <div className="signin">
                <button className='no-bg-btn'>Login</button>
                <span className="straigt-line">|</span>
                <button className='no-bg-btn'>Sign up</button>

            </div>
            
            <button className='dark-bg-btn'>Contact Us</button>
        </div>
      
    </div>
  )
}

export default Navbar
