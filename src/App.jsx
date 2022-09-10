import axios from 'axios';
import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
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
       <input
          type="text"  
          value={typeId}
          onChange={e =>setTypeId(e.target.value)}
       />
       <button onClick={searchType}>Search</button>
       
       <h2>Name: {rickmorty.name}</h2>
       <h2>Type: {rickmorty.type}</h2>
       <h2>Dimension: {rickmorty.dimension}</h2>
       <h2>Population: {rickmorty.residents?.length}</h2>
        <br />
      <ul> {rickmorty.residents?.map((resident) => (
            <ResidentInfo url={resident} key={resident} />

            ))}
      </ul>

    </div>
  )
}

export default App
