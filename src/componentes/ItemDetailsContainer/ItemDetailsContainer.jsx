import React,{useEffect,useState} from "react";
import "../NavBar/NavBar.css"
import ItemDetails from "../ItemDetails/ItemDetails";
import logo from "../NavBar/rose.png"
export default function ItemDetailsContainer(){
    

    const [info, setInfo] = useState(true)
    const mensaje = "Cargando..."

    useEffect(()=>{
        const prodPromise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                setInfo(false)
                resolve(true)
            }, 1000);
        })
        prodPromise.then(()=>{console.log("COMPLETADO")})
        prodPromise.catch(()=>{console.log("ERROR 404")})
    },[])

        return(
            <>{info ? (
                <>
                    <div className="cabecero" id="cabecero">
                        <a href="/"><h1 className="tituloI">cachilas</h1></a>
                        <div>
                            <a href="/"><img src={logo} alt="LOGO"/></a>
                            <br/>
                            <a href="/">FORD A</a>
                        </div>
                        <a href="/"><h1 className="tituloD">antiguos</h1></a>
                    </div>
                    <p className="ItemTitle-center">{mensaje}</p>
                </>
                ) : (
                    <ItemDetails />
                )}
            </>
        )
}