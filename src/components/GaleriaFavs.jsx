
import { useContext } from "react"
import Context from "../context/context.js"

const GaleriaFavs = ()=> {
    const {favoritos} = useContext(Context)
return (
    <div>

      <div className="p-3 galeria grid-columns-l">
        {
            favoritos.map((foto)=> {
                return (
                 <div 
                 key={foto.id}
                 className="foto"
                 style={{backgroundImage: `url(${foto.image})`}}
                 >
                  <span></span>
                <p>{foto.name} - {(foto.species).toUpperCase()}</p>
                </div>
                )
            })
        }
      </div>
    </div>
)
}

export default GaleriaFavs