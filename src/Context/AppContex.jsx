import React, { createContext, useContext, useState,useEffect } from 'react'
import { getItems } from "../utils/Firebase"


const AppContext = createContext ()

export const useAppContext = () => useContext(AppContext) 

const AppContextProvider = ({ children }) => {
const [products, setProducts] = useState([])

    useEffect(() => {
        let firestoreProducts = []
        getItems().then((res) => {
            res.doc.forEach((doc) => {
                firestoreProducts.push({ ...doc.data(), id: doc.id })
            })
        })
        .then(() => setProducts(firestoreProducts)) 
    }, [])



  return (
    <AppContext.Provider
    value={{
        products,
    }}
    >
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
