import { useContext } from "react";
import Galeria from "../components/Galeria.jsx";
import ThemeContext from "../context/ThemeContext.js"
const Home = ()=> {
  const {darkMode} = useContext(ThemeContext)

  return (
    <main>
    <div className={darkMode ? "homeDark" : "home"}>
      <h2 className={darkMode ? "titlegalleryDark" : "titlegallery"}>Personajes Star Wars</h2>

      <Galeria />
    </div>
    </main>
  );
}

export default Home