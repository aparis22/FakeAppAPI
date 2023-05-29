import React from 'react'
import './CharacterDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {
    //show data for a specific character
    //the id is in the url
    //use hook to get value
    const {characterId} = useParams()

    //create state to hold character data
    const [character, setCharacter] = React.useState('')

    // https://rickandmortyapi.com/api/character/
    // need to get data when the page loads
    React.useEffect(
        ()=>{
            // make api call to get data
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => {
                console.log(res.data)
                //got the data, now what do i do?
                setCharacter(res.data)
            })
            .catch(err => console.log(err))

        }, [] //run once after load
    )

  return (
    <div className="details-container">
        <img src={character.image}/>
        <div className="container-info">
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location?.name}</p>
            <p>Species: {character?.species}</p>
        </div>
    </div>
  )
}

export default CharacterDetails