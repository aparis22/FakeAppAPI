import React from 'react'
import './Episodes.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'


function Episodes() {

  // use context for global state
  //NOTE {} NOT []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  //create state for episode options
  const [options, setOptions] = React.useState([])
  const [selectedOption, setSelectedOption] = React.useState(1)
  const [selectedEpisode, setSelectedEpisode] = React.useState([])
  const [characterList, setCharacterList] = React.useState([])

  // when page loads I need to create the dropdown UI
  //https://rickandmortyapi.com/api/episode

  React.useEffect(
    ()=>{
      //make api call to find out how many episodes
      axios.get(`https://rickandmortyapi.com/api/episode`)
      .then(res => {
        // console.log(res.data.info.count)
        //I need to create an array of numbers
        const epOptions = []
        for (let i = 1; i <= res.data.info.count; i++)
        {
          epOptions.push(i)
        }
        // console.log(epOptions)
        //store this in state
        setOptions(epOptions)
      })
      .catch(err => console.log(err))

    }, []
  )

  //function to call when I select episode
  const handleSelectChange = (e) =>{
    // console.log(e.target.value)
    //save this value in state
    setSelectedOption(e.target.value)

  }

  React.useEffect(
    ()=>{
      console.log(selectedOption)
      //i need to get data from this episode
      // https://rickandmortyapi.com/api/episode/28
      // but then i need to make an api call for each character in the episode
      //use async
      //async function returns a promise
      const fetchEpisodeData = async () =>{
        try{
          //get specific episode data
          const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
          console.log(res.data)
          //store in state
          setSelectedEpisode(res.data)

          //res.data.characters is array with all endpoints for characters in this episode
          const episodeCharacters = await Promise.all(
            res.data.characters.map(url => {
              return axios.get(url).then(res => res.data)
            })
          )
            console.log(episodeCharacters)
            //store in state
            setCharacterList(episodeCharacters)

        }

        catch(err){
          console.log(err)
        }
      }

      //remember to call it
      fetchEpisodeData()

    }, [selectedOption]
  )

  return (
    <div className={darkMode?
      "episodes-container episodes-dark":"episodes-container"}>
      <div>
        <label>Select an episode:</label>
        <select id='select-episode' onChange={handleSelectChange}>
          {
            options.map(item =><option key={item} value={item}>{`Episode ${item}`}</option>)
          }
        </select>
      </div>
      <div>
          <div className='episode-info'>
            <p>Episode Name: {selectedEpisode?.name}</p>
            <p>Air Date: {selectedEpisode?.air_date}</p>
          </div>
          <div className='character-container'>
            {
              characterList.map(item=><CharacterCard
                key={item.id}
                character={item} />)
            }
          </div>
      </div>
    </div>
  )
}

export default Episodes

//https://player.vimeo.com/video/830027451?h=4a4221a6cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
//