import React, {useContext} from 'react';
import "./ItemList.css"
import ItemList from '../ItemList/ItemList';
import { CartContext } from '../../Context/CartContext';


export default function ItemListContainer(){

    const {productos}=useContext(CartContext)
    
    const mensaje = "Cargando..."

        return(
            <>{productos===[] ? (<p className="ItemTitle-center">{mensaje}</p>
                ) : (
                    <>
                    
                        <ItemList/>
                    </>
                )}
            </>
        )
}