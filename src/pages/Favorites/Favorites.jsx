import React, {useContext} from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { ThemeContext } from '../../contexts/ThemeContext'

function Favorites() {

  // use context for global state
  //NOTE {} NOT []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  // use context for global state
  //NOTE {} NOT []
  const {favorites} = useContext(FavoritesContext)
  return (
    <div className={darkMode?
      "favorites-container favorites-dark":"favorites-container"}>
      <h1>My Favorite Characters</h1>
      <div className='favorite-characters'>
          {
            favorites.length > 0?
            favorites.map(item=><CharacterCard
              key={item.id}
              character={item} />)
              :
              <p className='fav-alert'>No favorites selected yet!</p>
          }
      </div>
    </div>
  )
}

export default Favorites