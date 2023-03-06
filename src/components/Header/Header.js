import { Link, NavLink } from "react-router-dom"
import imgLogo from '../../assets/images/logo.png'

import './Header.sass'


const Header = () => {

   return (
      <header className="header-wrapper">
         <div className="container">
            <div className="header">
               <div className="logo">
                  <Link to='./'>
                     <img src={imgLogo} alt="logo" />
                  </Link>
               </div>
               <nav className="nav-menu">
                  <NavLink
                     to="./"
                     className='nav-menu__item'
                  >
                     <p>Home</p>
                     <div className='active-line'></div>
                  </NavLink>
                  <NavLink
                     to="./people"
                     className="nav-menu__item"
                  >
                     <p>Characters</p>
                     <div className='active-line'></div>
                  </NavLink>
               </nav>
            </div>
         </div>
      </header >
   )

}
export default Header
