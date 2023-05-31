import React from 'react'
import './Episodes.css'
import axios from 'axios'

function Episodes() {
  //create state for episode options
  const [options, setOptions] = React.useState([])
  const [selectedOption, setSelectedOption] = React.useState(1)

  // when page loads I need to create the dropdown UI
  //https://rickandmortyapi.com/api/episode

  React.useEffect(
    ()=>{
      //make api call to find out how many episodes
      axios.get(`https://rickandmortyapi.com/api/episode`)
      .then(res => {
        console.log(res.data.info.count)
        //I need to create an array of numbers
        const epOptions = []
        for (let i = 1; i <= res.data.info.count; i++)
        {
          epOptions.push(i)
        }
        console.log(epOptions)
        //store this in state
        setOptions(epOptions)
      })
      .catch(err => console.log(err))

    }, []
  )

  //function to call when I select episode
  const handleSelectChange = (e) =>{
    console.log(e.target.value)
    //save this value in state
    selectedOption(e.target.value)

  }
  return (
    <div className="episodes-container">
      <div>
        <label>Select an episode</label>
        <select id='select-episode' onChange={handleSelectChange}>
          {
            options.map(item =><option key={item} value={item}>{`Episode ${item}`}</option>)
          }
        </select>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Episodes

//https://player.vimeo.com/video/830027451?h=4a4221a6cb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
//31:13