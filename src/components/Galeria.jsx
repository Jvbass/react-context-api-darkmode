import "../assets/css/galeria.css";
import Heart from "./Heart.jsx";

import {useContext} from "react"
import Context from "../context/context.js"

const Galeria = ()=> {
  const { fotos, handleFavs, favoritos } = useContext(Context)
  return (
    <div className="galeria grid-columns-xl p-3">
      {
        fotos.map((foto)=> {
          return (
            <div 
            onClick={()=> handleFavs(foto)}
            key={foto.id} 
            className="foto" 
            style={{backgroundImage: `url(${foto.image})`}}>
            <Heart filled={ favoritos.includes(foto) ? true : false}/>
            <p>{foto.name} - {(foto.species).toUpperCase()}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Galeria