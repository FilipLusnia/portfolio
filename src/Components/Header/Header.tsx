import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

function Header() {

  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="header_container">
      <div className={isMenuActive ? "header -active" : "header"}> 
        <div>

        </div>

        <div className="nav_items">
          <div onClick={()=> setIsMenuActive(!isMenuActive)} className={isMenuActive ? "hamburger -active" : "hamburger"}>
            <div className="hamburger-box">
              <div className="hamburger-inner"/>
            </div>
          </div>
          <NavLink exact to="/" activeClassName="-current" className={isMenuActive ? "nav_item -active" : "nav_item"}>HOME</NavLink>
          <NavLink exact to="/projects" activeClassName="-current" className={isMenuActive ? "nav_item -active" : "nav_item"}>PROJECTS</NavLink>
          <NavLink exact to="/contacts" activeClassName="-current" className={isMenuActive ? "nav_item -active" : "nav_item"}>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;