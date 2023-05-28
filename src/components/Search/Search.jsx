import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {
    // I need to get the input from the textbox
    // Where will I put it?? Create State.
    const [query, setQuery] = React.useState('')

    // https://rickandmortyapi.com/api/character/?name

    const handleSubmit = (e) =>{
        // stops page from refreshing
        e.preventDefault();
        console.log('Search for ', query)
        // need to make API call to get matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res =>{
            console.log(res.data.results)
            // now how do we get the data only? 
            // change characters to data
            setCharacters(res.data.results)
        })
        .catch(err =>{
          // check for not found
          if (err.response.status === 404){
            alert(`No characters named ${query}`)
          } else {
            console.log(err)
          }
        })

        //clear textbox
        setQuery('')
    }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
        <input onChange={(e)=>setQuery(e.target.value)} value={query}
        type="text" placeholder="Search all characters!"></input>
    </form>
  )
}

export default Search