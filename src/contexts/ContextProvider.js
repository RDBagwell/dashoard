import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initalState = {
    chat: false,
    cart: false,
    userProfile: false,
    notificaton: false
}

export const CotextProvider = ({ children })=>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initalState);
    const [sreenSize, setScreenSize] = useState(undefined)

    const handleClick = (clicked)=>{
        setIsClicked({...initalState, [clicked]:true})
    }
    
    return (
        <StateContext.Provider 
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            sreenSize, 
            setScreenSize
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = ()=> useContext(StateContext);