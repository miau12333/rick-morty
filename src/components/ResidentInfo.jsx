import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles.css'

const ResidentInfo = ({url}) => {

    const [character, setCharacter] = useState ({})

    useEffect(()=>{
        axios.get(`${url}`)
             .then(res=>setCharacter(res.data));
        }, []);

    console.log(character)

    return (
        <li className='size'>
            <div className="ctn">
                <img src={character.image} alt="" />
                <h3>{character?.name}</h3>
                <p><b>Status:</b> {character.status}</p>
                <p><b>Origin:</b> {character.origin?.name}</p>
                <p><b>Episodes where appear:</b> {character.episode?.length}</p>
            </div>
        </li>
    );
};

export default ResidentInfo;