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
        <>
            <div className="ctn">
                <img src={character.image} alt="" />
                <h3>{character?.name}</h3>
                <h3>{character.status}</h3>
                <h3><b>Origin:</b> {character.origin?.name}</h3>
                <h3>Episodes where appear:{character.episode?.length}</h3>
            </div>
        </>
    );
};

export default ResidentInfo;