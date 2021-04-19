import { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";

function Header() {

  const [isMenuActive, setIsMenuActive] = useState(false); 
  const [animationStop, setAnimationStop] = useState<any>({maxWidth: "60px"}); //prevents animation on page load
  const [menuLinksStyle, setMenuLinksStyle] = useState<any>({display: 'none'}); //hides menu links when not visible
  const headerRef = useRef<any>(null);

  useEffect(() => {
    // prevents menu from animating on page load ("fold" animation)
    setTimeout(()=> {
      setAnimationStop(null) ;
    }, 600);

    //hides menu links when not visible
    let timeout;
    !isMenuActive ?
      timeout = setTimeout(() => { 
        setMenuLinksStyle({display: 'none'});
      }, 600)
    :
      clearTimeout(timeout);
      setMenuLinksStyle({display: 'block'});

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      if(headerRef.current.contains(e.target)) return;
      setIsMenuActive(false);
    };
    isMenuActive && document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, [isMenuActive]);

  return (
    <div className="header_container"> 
      <div ref={headerRef} className={isMenuActive ? "header -active" : "header"} style={animationStop}> 
        
        <div className="nav_items">
          <div onClick={() => setIsMenuActive(!isMenuActive)} className={isMenuActive ? "hamburger -active" : "hamburger"}>
            <div className="hamburger-box">
              <div className="hamburger-inner"/>
            </div>
          </div>

          <NavLink 
            exact to="/" 
            activeClassName="-current" 
            className={isMenuActive ? "nav_item -first -active" : "nav_item -first"} 
            style={menuLinksStyle}
            onClick={()=> setIsMenuActive(false)}>
              HOME
          </NavLink>

          <NavLink 
            exact to="/projects" 
            activeClassName="-current" 
            className={isMenuActive ? "nav_item -second -active" : "nav_item -second"} 
            style={menuLinksStyle}
            onClick={()=> setIsMenuActive(false)}>
              PROJECTS
          </NavLink>

          <NavLink 
            exact to="/contact" 
            activeClassName="-current" 
            className={isMenuActive ? "nav_item -third -active" : "nav_item -third"}
            style={menuLinksStyle}
            onClick={()=> setIsMenuActive(false)}>
              CONTACT
          </NavLink>

        </div>
      </div>
    </div>
  );
}

export default Header;