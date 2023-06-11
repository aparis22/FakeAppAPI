import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props){
    //create my global state
    const [darkMode, setDarkMode] = useState(false)

    useEffect(
        ()=>{
            // console.log('context loaded')
            const storeDarkMode = localStorage.getItem('darkMode')
            //check if something was there and if so then use that to initialize
            if (storeDarkMode){
                //set with this value
                setDarkMode(JSON.parse(storeDarkMode))
            }

        }, [] //run one time when context loads
    )

    useEffect(
        ()=>{
            // console.log('dark mode is ', darkMode)
            //save new state of dark mode when it changes
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        }, [darkMode]
    )

    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}

        </ThemeContext.Provider>
    )

}