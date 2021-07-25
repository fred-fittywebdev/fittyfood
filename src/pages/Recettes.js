import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Recette from '../components/Recette';

const Recettes = () => {
    const [recetteData, setRecetteData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios
        .get('https://api-recettes.netlify.app/data.json/')
        .then((res) => setRecetteData(res.data.recettes))
    };
    
    return (
        <div className="menu section">
        <div className="title">
            <h2>ici les recettes</h2>
            <div className="underline"></div>
        </div>
            
            <ul className="section-center">{recetteData
                .map((recette, props) => (
                <Recette key={recette.recette_id} recette={recette} />
            ))}</ul>
        </div>
    );
};

export default Recettes;