//importacion de estilos
import "./styles.css";

//importacion de librerias react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Context from "./context/context.js"
import ThemeContext from "./context/ThemeContext.js";

//importacion de componentes
import Navbar from "./components/Navbar.jsx";

// importacion de views
import Home from "./views/Home.jsx";
import Favoritos from "./views/Favoritos.jsx";

export default function App() {
  const url = "https://jvbass.github.io/starwars-api/api/all.json";
 
  const [fotos, setFotos] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const [darkMode,setDarkMode] = useState()

   const handleFavs = (foto)=> {
    const enFavs = favoritos.includes(foto)
    if (enFavs){
      const favoritosActualizado = favoritos.filter((favorito)=> favorito != foto)
      setFavoritos (favoritosActualizado)
    } else {
      const favoritosActualizado = [...favoritos]
      favoritosActualizado.push(foto)
      setFavoritos(favoritosActualizado)
    }
  }

  const handleTheme = ()=> {
    setDarkMode(!darkMode);
  }

  const globalState = { fotos, favoritos, handleFavs }
  const themeState = {handleTheme, darkMode, setDarkMode}

  useEffect ( ()=> {
    fetch(url)
      .then((res) => res.json())
      .then((json)=> {
      setFotos(json)
      })
      .catch((e) => console.log(e))
    },[])
  
  return (
    <div className="App">

    <ThemeContext.Provider value={themeState}>
        <BrowserRouter>

          <Navbar />

          <Context.Provider value={globalState}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
          </Context.Provider>
        </BrowserRouter>
    </ThemeContext.Provider>
    </div>
  );
}