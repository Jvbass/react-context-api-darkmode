import { useContext } from "react";
import GaleriaFavs from "../components/GaleriaFavs.jsx"
import ThemeContext from "../context/ThemeContext.js"

const Favoritos = () => {
  const {darkMode} = useContext(ThemeContext)

  return (
    <main className={darkMode ? "favHomeDark" : "favHome"}>
    <div className={darkMode ? "favHomeDark" : "favHome"}>
            <h2 className={darkMode ? "titlegalleryDark" : "titlegallery"}>Personajes favoritos</h2>
            <GaleriaFavs></GaleriaFavs>
    </div>
    </main>
  );
}

export default Favoritos