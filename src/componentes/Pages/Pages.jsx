import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PageTienda from "./Tienda";
import ItemDetailsContainer from "../ItemDetailsContainer/ItemDetailsContainer";
import CarritoFinal from "./Carrito";
import NotFound from "./NotFound";
import AppContexProvider from "../../Context/AppContex";

export default function Pages(){
    return(
        <AppContexProvider> 
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PageTienda/>}/>
                <Route exact path="/Productos/:id" element={<ItemDetailsContainer/>}/>
                <Route exact path="/CarritoFinal" element={<CarritoFinal/>}/>
                <Route exact path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>  
        </AppContexProvider>
    )
}