import React from 'react';
import Recipe from '../recipe/Recipe'
import './Recipes.css'

const Recipes = ({recipes}) => {
    return (
        <div className='recipes'>
            {recipes.map((el,i)=><Recipe recipe={el} key={i}/>)}
        </div>
    )
}

export default Recipes
