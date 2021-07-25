import React from 'react';
import { useHistory, Link, NavLink } from 'react-router-dom';

const Recette = ({recette}) => {

    console.log(recette)
    return (
        <div>
            <article className="menu-item">
                <img className="photo" src={recette.recette_image} alt="" />
                
                <div className="item-info"> 
                <header>
                    <h4>{recette.recette_nom}</h4>
                    
                    <em className="price">Nombre de parts: {recette.recette_parts}</em>
                </header>
                <p className="item-text">{recette.recette_description}</p>
                <NavLink to={`/recettes/${recette.recette_nom}`} className="price" >Voir plus</NavLink>
                {/*<p className='item-text'>instructions: {recette.recette_instructions}</p>*/}
                {/*<p className='item-text'>Ingrédients: {recette.recette_ingredients}</p>*/}
                </div>
            </article>
        </div>
    );
};

export default Recette;