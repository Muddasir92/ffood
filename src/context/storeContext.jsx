import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const storeContext=createContext(null)

const storeContextProvider =(props)=>{

const [cartItems, setCartItems]=useState({})

const addToCart =(itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((pre)=>({...pre,[itemId]:1}))
    }
    else{
        setCartItems((pre)=>({...pre,[itemId]:pre[itemId]+1 }))
    }

}
const removeFromCart=(itemId)=>{
    setCartItems((pre)=>({...pre,[itemId]:pre[itemId]-1}))

}
useEffect(()=>{
    // console.log(cartItems)
})
const contextValue ={
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
    
}
    return(
        <storeContext.Provider value={contextValue}>
                {props.children}
        </storeContext.Provider>

    )
}
export default storeContextProvider