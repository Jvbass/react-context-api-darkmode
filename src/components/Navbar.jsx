import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext.js"

const Navbar = ()=> {
  const {darkMode, handleTheme} = useContext(ThemeContext)
  return (
    <nav className={darkMode ? "navbarDark" : "navbar"}>
      <h1>
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
      </h1>
      <div className="icon-darkMode" onClick={handleTheme}>
      <span
      className={
        darkMode
          ? "btn fa-brands fa-galactic-republic"
          : "btn fa-solid fa-jedi"
      }
      
    ></span>
    <h3>{darkMode ? "Sith mode" : "Jedi mode"}</h3>
    </div>
    </nav>
  );
}

export default Navbar
