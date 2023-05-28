import React, {useEffect, useState} from 'react'
import "./Homepage.css"
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Homepage() {
    //create a state for the characters
    const [characters, setCharacters] = useState([])

    // https://rickandmortyapi.com/api/character

    // I need to make api call in when the page loads
    // so I will use 'useEffect'
    useEffect(
        ()=>{
            //call api to get characters
            axios.get('https://rickandmortyapi.com/api/character')
            .then(res =>{
                console.log(res.data.results)
                //store data in this state
                setCharacters(res.data.results)
            })
            .catch(err=>console.log(err))
        }, []//empty array means run once when page loads
    )

  return (
    <div className="home-container">
        <h1>Main Characters</h1>
        <div className="characters-container">
            {
                characters.map(item=><CharacterCard
                                key={item.id}
                                character={item} />)
                // characters.map(item=>
                // <p key={item.id}>{item.name}</p>)
            }
        </div>
    </div>
  )
}

export default Homepage