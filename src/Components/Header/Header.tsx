import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";

function Header() {

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [animationStop, setAnimationStop] = useState<any>({maxWidth: "60px"});
  const [linkState, setLinkState] = useState<any>({display: 'none'});
  const [blockMenu, setBlockMenu] = useState(false);
  const headerRef = useRef<any>(null);

  const holdMenuState = () => {
    //prevents user from spamming the menu button
    setBlockMenu(true);
    setTimeout(()=> {setBlockMenu(false)}, 600); 
  }

  const openMenu = () => {
    !blockMenu && setIsMenuActive(!isMenuActive);
    !blockMenu && holdMenuState();
  }

  useEffect(() => {
    // prevents menu from animating on page load ("fold" animation)
    setTimeout(()=> {setAnimationStop(null)}, 600); 

    // removes links from menu when not visible
    isMenuActive 
      ? setLinkState({display: 'block'})
      : setTimeout(()=> {setLinkState({display: 'none'})}, 600);

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      if(headerRef.current.contains(e.target)) {
        return;
      }
      setIsMenuActive(false);
    }
    
    isMenuActive && document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, [isMenuActive]);

  return (
    <div className="header_container"> 
      <div ref={headerRef} className={isMenuActive ? "header -active" : "header"} style={animationStop}> 
        
        <div className="nav_items">
          <div onClick={openMenu} className={isMenuActive ? "hamburger -active" : "hamburger"}>
            <div className="hamburger-box">
              <div className="hamburger-inner"/>
            </div>
          </div>

          <NavLink 
            exact to="/" 
            activeClassName="-current" 
            className={isMenuActive ? "nav_item -first -active" : "nav_item -first"} 
            style={linkState}
            onClick={()=> setIsMenuActive(false)}>
              HOME
          </NavLink>

          <NavLink 
            exact to="/projects" 
            activeClassName="-current" 
            className={isMenuActive ? "nav_item -second -active" : "nav_item -second"} 
            style={linkState}
            onClick={()=> setIsMenuActive(false)}>
              PROJECTS
          </NavLink>

          <NavLink 
            exact to="/contact" 
            activeClassName="-current" 
            className={isMenuActive ? "nav_item -third -active" : "nav_item -third"} 
            style={linkState}
            onClick={()=> setIsMenuActive(false)}>
              CONTACT
          </NavLink>

        </div>
      </div>
    </div>
  );
}

export default Header;