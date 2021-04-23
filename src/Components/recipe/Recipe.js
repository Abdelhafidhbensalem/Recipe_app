import React from 'react';
import {Link} from 'react-router-dom'
import './Recipe.css';

const Recipe = ({recipe}) => {
    return (
        <div className="card-container">
        <div>
          <div className="cocktailcard">
            <div className="card_left">
            <Link to={`recipes/${recipe.recipe.uri.slice(51)}`}><div className='cocktailimg'><img src={recipe.recipe.image} alt="cocktail_image" /></div></Link>
            </div>
            <div className="card_right">
              <h1>{recipe.recipe.label}</h1>
              <div className="card_right__details">
                <ul>
                  <li>{recipe.recipe.cuisineType}</li>
                  <li>-------------------------</li>
                  <li>Calories:{Math.ceil(recipe.recipe.calories)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    )
}

export default Recipe
