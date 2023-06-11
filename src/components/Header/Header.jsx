import React, {useContext} from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'

function Header() {
  //create a variable for dark-mode
  // const darkMode = false;
  // const [darkMode, setDarkMode] = React.useState(false)

  // use context for global state
  //NOTE {} NOT []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?
      "header-container header-dark":"header-container"}>
      <div>
        <Link to="/" style={{marginRight:"10px"}}>Home</Link>
        <Link to="/about" style={{marginRight:"10px"}}>About</Link>
        <Link to="/episodes">Episodes</Link>
      </div>
      <Link to="/favorites" className='favorites-link'>My Favorites</Link>
      <button className={darkMode?
      "theme-button theme-button-dark":"theme-button"}
        onClick={()=>setDarkMode(!darkMode)}>
        {
          darkMode?
          "Light Mode"
          :
          "Dark Mode"
        }
        </button>
    </div>
  )
}

export default Header
//https://player.vimeo.com/video/831635385?h=ead7a9e65e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
