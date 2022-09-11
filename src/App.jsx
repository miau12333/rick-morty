import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import Character from './components/Character';
import ResidentInfo from './components/ResidentInfo';

function App() {
  const [rickmorty, setRickMorty] = useState ({})
  const [typeId, setTypeId] = useState("");

 useEffect(()=>{
 const randomId = Math.floor(Math.random()*125)+1
 axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res=>setRickMorty(res.data));
 }, []);

 console.log(rickmorty);

 const searchType=()=>{
      axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
           .then(res=>setRickMorty(res.data));
}


  return (
    <div className="App">
      <div className='imgBG'>
       <input
          type="text"  
          value={typeId}
          placeholder= "Type a location ID"
          onChange={e =>setTypeId(e.target.value)}
       />
       <button onClick={searchType} className='btn'><span class="material-symbols-outlined">search</span></button>
      </div>
      <h2>{rickmorty.name}</h2>
      <ul className='text'>
       <li className='color'><b>Type:</b> {rickmorty.type}</li>
       <li className='color'><b>Dimension:</b> {rickmorty.dimension}</li>
       <li className='color'><b>Population:</b> {rickmorty.residents?.length}</li>
      </ul>
      <br />
      <h2>Residents</h2>
        <ul className='card'> {rickmorty.residents?.map((resident) => (
              <ResidentInfo url={resident} key={resident} />

              ))}
        </ul>

    </div>
  )
}

export default App
