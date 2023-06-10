import React from 'react'
import "./Header.css"

function Header() {
  //create a variable for dark-mode
  const darkMode = false;

  return (
    <div className={darkMode?
      "header-container header-dark":"header-container"}>
      <div>
        <a href="/" style={{marginRight:"10px"}}>Home</a>
        <a href="/about" style={{marginRight:"10px"}}>About</a>
        <a href="/episodes">Episodes</a>
      </div>
      <button className="theme-button">
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
//12:11