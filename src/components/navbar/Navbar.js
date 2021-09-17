import React from 'react'
import "./Navbar.css";

            //tener acceso a la posicion del scroll
const Navbar = ({isScrolling}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }

    return (
        /*si baja el scroll, cambia la clase*/
      <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
          <div className="navbar-logo" onClick={toTheTop}>
              Darnell Armas
          </div>
      </nav>
    )
}

export default Navbar
