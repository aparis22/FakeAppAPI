import { useState, createContext, useEffect } from "react";

export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props){
    //create my global state
    const [favorites, setFavorites] = useState([])

    useEffect(
        ()=>{
            // console.log('context loaded')
            const storedFavorites = localStorage.getItem('favoritesList')
            //check if something was there and if so then use that to initialize
            if (storedFavorites){
                //set with this value
                setFavorites(JSON.parse(storedFavorites))
            }

        }, [] //run one time when context loads
    )

    useEffect(
        ()=>{
            //save new favorites when there are any changes
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        }, [favorites]
    )

    //function to ass character to favorites
    const addCharacter = (charToAdd) =>{
        console.log('adding', charToAdd)
        //add this character to state
        let newFavorites = [...favorites, charToAdd]
        console.log(newFavorites)
        //store in state
        setFavorites(newFavorites)

    }

    // function to remove a character from favorites
    const removeCharacter = (charId)=>{
        console.log('remove ', charId)
        //remove this character from state
        let newFavorites = favorites.filter(item=>item.id !== charId)
        //store in state
        setFavorites(newFavorites)

    }

    return(
        <FavoritesContext.Provider value={{favorites, addCharacter, removeCharacter}}>
            {props.children}

        </FavoritesContext.Provider>
    )

}